import React, { createContext, useContext, useEffect } from "react";
import { DarkModeContext } from "./context/DarkModeProvider";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ReservationModal from "./components/LandingPage/ReservationModal";

function App() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	if (darkMode == true) {
		document.body.style.backgroundColor = "#0f172a";
	} else {
		document.body.style.backgroundColor = "white";
	}

	return (
		<>
			<div className="">
				<div className=" m-0">
					<Navbar />
					<LandingPage />
					<div className="z-30 absolute top-0 left-0">
						<ReservationModal />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
