import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalReducer from "../features/ModalSlice";
import userReducer from "../features/UserSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
