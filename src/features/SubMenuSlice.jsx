import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	subMenu: "pizza",
};

const subMenu = createSlice({
	name: "subMenu",
	initialState,
	reducers: {
		choose: (state, action) => {
			state.subMenu = action.payload;
		},
	},
});

export default subMenu.reducer;
export const subMenuSelector = (state) => state.subMenu;
export const { choose } = subMenu.actions;
