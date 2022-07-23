import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		getMenu: builder.query({
			async queryFn(arg) {
				try {
					const colRef = collection(db, "menu", "menu", arg);
					const snapShot = await getDocs(colRef);
					let menu = [];
					snapShot.forEach((snap) =>
						menu.push({ id: snap.id, ...snap.data() })
					);

					return { data: menu };
				} catch (err) {
					console.log(err);
				}
			},
		}),
	}),
});

export const { useGetMenuQuery } = apiSlice;
