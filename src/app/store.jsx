import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalReducer from "../features/ModalSlice";
import userReducer from "../features/UserSlice";
import subMenuReducer from "../features/SubMenuSlice";
import menuReducer from "../features/MenuSlice";

import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
		subMenu: subMenuReducer,
		menu: menuReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(apiSlice.middleware),
});
