import { createSlice } from "@reduxjs/toolkit";
import { clearError, userSignIn, userSignUp } from "./UserSlice";

const initialState = {
	SignUp: false,
	Login: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleSignUp: (state) => {
			if (!state.SignUp) {
				state.Login = false;
				state.SignUp = true;
			} else {
				state.SignUp = false;
			}
		},
		toggleLogin: (state) => {
			if (!state.Login) {
				state.SignUp = false;
				state.Login = true;
			} else {
				state.Login = false;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(userSignUp.fulfilled, (state) => {
				state.SignUp = false;
			})
			.addCase(userSignIn.fulfilled, (state) => {
				state.Login = false;
			});
	},
});

export default modalSlice.reducer;
export const { toggleSignUp, toggleLogin } = modalSlice.actions;
