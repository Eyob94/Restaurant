import React, { useCallback, useContext, useState } from "react";

import { DarkModeContext } from "../../context/DarkModeProvider";

import Text from "./Text";
import Images from "./Images";
import Mobile from "./Mobile";

import Foods from "./img/foods.jpeg";
import Pasta from "./img/pasta.jpg";
import Pizza from "./img/pizza.jpg";
import Lasagna from "./img/lasagna.jpg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

const Slides = [
	{
		src: `${Foods}`,
	},
	{
		src: `${Pasta}`,
	},
	{
		src: `${Pizza}`,
	},
	{
		src: `${Lasagna}`,
	},
];

const Home = () => {
	const { darkMode } = useContext(DarkModeContext);
	const [currentSlide, setCurrentSlide] = useState(0);

	const toggleDarkModeColor = useCallback(
		(option1 = "black", option2 = `goldenBrown`) => {
			return darkMode ? option2 : option1;
		},
		[darkMode]
	);

	return (
		<div className="mx-0 shadow-lg pb-2 shadow-gray-900/40">
			{/* Desktop */}
			<div className="desktop md:flex hidden justify-around">
				<div className="desktop-wrapper-top flex justify-between h-[660px] w-max gap-28">
					{/* Left */}
					<Text toggleDarkModeColor={toggleDarkModeColor} darkMode={darkMode} />

					{/* Right */}
					<Images
						currentSlide={currentSlide}
						setCurrentSlide={setCurrentSlide}
						Slides={Slides}
					/>
				</div>
				<div class="desktop-wrapper-2"></div>
			</div>

			{/* Mobile */}
			<Mobile
				Slides={Slides}
				toggleDarkModeColor={toggleDarkModeColor}
				currentSlide={currentSlide}
			/>
		</div>
	);
};

export default Home;
