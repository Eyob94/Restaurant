import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import DarkModeProvider from "./app/context/DarkModeProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<div className="">
		<Provider store={store}>
			<DarkModeProvider>
				<App />
			</DarkModeProvider>
		</Provider>
	</div>
);
