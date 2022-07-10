import React, { createContext } from "react";
import { useState } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeProvider;
