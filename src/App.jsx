import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeProvider";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUpModal from "./components/Account/SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./components/Account/LoginModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { setUser } from "./features/UserSlice";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { fetchMenu } from "./features/MenuSlice";

function App() {
	const { SignUp, Login } = useSelector((state) => state.modal);

	const dispatch = useDispatch();

	onAuthStateChanged(auth, (user) => (user ? dispatch(setUser(user)) : ""));

	const { darkMode } = useContext(DarkModeContext);

	if (darkMode == true) {
		document.body.style.backgroundColor = "#172030";
	} else {
		document.body.style.backgroundColor = "rgba(220,220,220, .25)";
	}

	return (
		<>
			<div className={`relative ${SignUp || Login ? "hidden" : ""} `}>
				<div className="relative navbar z-50">
					<Navbar />
				</div>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/menu" element={<Menu />}>
						<Route path="dessert" element={<About />} />
					</Route>
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</div>
			<SignUpModal />
			<LoginModal />
		</>
	);
}

export default App;
