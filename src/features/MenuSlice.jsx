import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import SubMenus from "../components/Menu/SubMenus";
import { db } from "../firebase/config";

const initialState = {
	isLoading: null,
	isFulfilled: null,
	isError: null,
	error: null,
	menu: {
		pizza: [],
		pasta: [],
	},
};

const subMenus = ["pizza", "pasta"];

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async (arg) => {
	try {
		let data = [];

		const colRef = collection(db, "menu", "menu", arg);
		const snapShot = await getDocs(colRef);

		snapShot.forEach((snap) => {
			data.push({ id: snap.id, ...snap.data() });
		});

		return { key: arg, data };
	} catch (err) {
		return err;
	}
});

const menuSlice = createSlice({
	name: "menu",

	initialState,

	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMenu.fulfilled, (state, action) => {
				state.menu[action.payload.key] = action.payload.data;
			})
			.addCase(fetchMenu.pending, (state, action) => {
				console.log("...");
			})
			.addCase(fetchMenu.rejected, (state, action) => {
				console.log(action.payload);
			});
	},
});

export default menuSlice.reducer;
