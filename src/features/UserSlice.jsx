import {
	createSlice,
	isRejectedWithValue,
	nanoid,
	rejectWithValue,
} from "@reduxjs/toolkit";
import { createUser } from "./UserSignUpAuthentication";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	onSnapshot,
	setDoc,
} from "firebase/firestore";
import { signOutUser } from "./UserSignOut";
import { loginUser } from "./UserLoginAuthentication";

const initialState = {
	user: null,
	loading: null,
	error: null,
};

const colRef = collection(db, "users");

export const userSignUp = createAsyncThunk(
	"user/userSignUp",
	async (userCredentials) => {
		const { email, password, image } = userCredentials;

		const user = await createUser(email, password);
		const imageRef = ref(storage, `user_images/${nanoid()}`);

		const avatarUrl = await uploadBytes(imageRef, image).then(() =>
			getDownloadURL(imageRef)
		);

		const docRef = doc(db, "users", user.uid);

		await setDoc(docRef, {
			email: user.email,
			avatarUrl: avatarUrl,
			address: {
				city: null,
				street: null,
				houseNo: null,
			},
			phone: null,
			tableBooked: {
				date: null,
				seats: null,
				class: null,
			},
			dob: null,
			cartItems: [],
		});

		return await getDoc(docRef);
	}
);

export const userSignOut = createAsyncThunk("user/userSignOut", async () => {
	await signOutUser();
});

export const userSignIn = createAsyncThunk(
	"user/userSignIn",
	async (userCredentials) => {
		const { email, password } = userCredentials;

		const user = await loginUser(email, password);

		console.log("signed in");

		const docRef = doc(db, "users", user.uid);
		console.log("retrieved");

		return await getDoc(docRef);
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		clearError: (state) => {
			state.error = null;
		},
		default: (state) => {
			return state;
		},
	},
	extraReducers: (builder) => {
		builder
			//user sign up successful
			.addCase(userSignUp.fulfilled, (state, action) => {
				state.user = action.payload.data();
				state.loading = false;
				state.error = false;
			})

			//user sign up pending
			.addCase(userSignUp.pending, (state) => {
				state.user = false;
				state.loading = true;
			})

			//user sign in successful
			.addCase(userSignIn.fulfilled, (state, action) => {
				state.loading = false;
				state.user = { ...action.payload.data() };
				state.error = null;
			})
			.addCase(userSignIn.pending, (state) => {
				state.user = false;
				state.loading = true;
			})

			//user sign out successful
			.addCase(userSignOut.fulfilled, (state) => {
				state.user = null;
				state.error = false;
				state.loading = false;
			})

			//user sign out pending
			.addCase(userSignOut.pending, (state) => {
				state.loading = true;
			})

			//user sign up failed
			.addCase(userSignUp.rejected, (state, action) => {
				state.loading = false;
				state.user = null;
				state.error = action.error;
			})

			//user sing in failed
			.addCase(userSignIn.rejected, (state, action) => {
				state.user = null;
				state.loading = false;
				state.error = action.error;
			})

			//user sign out failed
			.addCase(userSignOut.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
			});
	},
});

export default userSlice.reducer;
export const { clearError, setUser } = userSlice.actions;
