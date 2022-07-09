import React, { createContext, useContext } from "react";
import DarkModeProvider, {
	DarkModeContext,
} from "./app/context/DarkModeProvider";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	if (darkMode == true) {
		document.body.style.backgroundColor = "#0f172a";
	} else {
		document.body.style.backgroundColor = "white";
	}

	return (
		<>
			<div>
				<Navbar />
			</div>
		</>
	);
}

export default App;
