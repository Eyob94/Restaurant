import React, { createContext, useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeProvider";
import Home from "./components/Home/Home"; 
import Navbar from "./components/Navbar/Navbar";
import SignUpModal from "./components/Account/SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./components/Account/LoginModal";

function App() {
	const { SignUp, Login } = useSelector((state) => state.modal);

	

	const dispatch = useDispatch();
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	if (darkMode == true) {
		document.body.style.backgroundColor = "#172030";
	} else {
		document.body.style.backgroundColor = "white";
	}

	return (
		<>
			<div className={`relative ${SignUp||Login?"blur-md":""} `}>
				<div className="relative navbar z-50">
					<Navbar />
				</div>
				 <Home /> 
			</div>
			{SignUp && (
				<div className="modal absolute top-0 left-0 transition-all">
					<SignUpModal />
				</div>
			)}
			{Login && (
				<div className="modal absolute top-0 left-0 transition-all">
					<LoginModal />
				</div>
			)}
		</>
	);
}

export default App;
