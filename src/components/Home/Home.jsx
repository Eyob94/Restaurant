import React, { useCallback, useContext, useEffect, useState } from "react";

import { DarkModeContext } from "../../context/DarkModeProvider";

import Text from "./Text";
import Images from "./Images";
import Mobile from "./Mobile";

import Foods from "./img/foods.jpeg";
import Pasta from "./img/pasta.jpg";
import Pizza from "./img/pizza.jpg";
import Lasagna from "./img/lasagna.jpg";
import Table from "./img/table.jpg";
import Wine from "./img/wine.jpg";
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

const Slides2 = [
	{
		src: `${Table}`,
	},
];
const Slides3 = [
	{
		src: `${Wine}`,
	},
];

const Home = () => {
	const { darkMode } = useContext(DarkModeContext);
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() =>
				setCurrentSlide((prev) => {
					if (prev >= Slides.length - 1) {
						prev = 0;
						return prev;
					}
					return (prev += 1);
				}),
			3000
		);

		return () => clearInterval(interval);
	}, []);

	const toggleDarkModeColor = useCallback(
		(option1 = "black", option2 = `goldenBrown`) => {
			return darkMode ? option2 : option1;
		},
		[darkMode]
	);

	return (
		<div className="mx-0 shadow-lg pb-2 shadow-gray-900/40">
			{/* Desktop */}
			<div className="desktop md:flex flex-col hidden justify-between items-center w-[100vw]">
				<div className="desktop-wrapper-top flex justify-between h-[660px]  gap-6 w-[90%] ">
					{/* Left */}
					<Text
						toggleDarkModeColor={toggleDarkModeColor}
						darkMode={darkMode}
						Title={"Meet your soulmate in our exquisite cousine"}
						subTitle={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enimrepudiandae quos consequatur omnis, amet modi nam, consectetur"
						}
						social={true}
						order={true}
					/>
					{/* Right */}
					<Images
						currentSlide={currentSlide}
						setCurrentSlide={setCurrentSlide}
						Slides={Slides}
					/>
				</div>
				<div className="desktop-wrapper-2 flex justify-between h-[660px] gap-16">
					<div className="left-0 w-[100%] h-[100%] flex-1 relative ml-36">
						<div className="absolute w-[100%] h-[100%] scale-75 -top-28">
							<Images
								currentSlide={0}
								setCurrentSlide={setCurrentSlide}
								Slides={Slides3}
							/>
						</div>
						<div className="absolute w-[100%] h-[100%] top-16 -left-36 scale-75">
							<Images
								currentSlide={0}
								setCurrentSlide={setCurrentSlide}
								Slides={Slides2}
							/>
						</div>
					</div>
					<div className="flex-1">
						<Text
							Title={"Find yourself in the comfort of your meal"}
							toggleDarkModeColor={toggleDarkModeColor}
							darkMode={darkMode}
							subTitle={
								"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enimrepudiandae quos consequatur omnis, amet modi nam, consectetur"
							}
							reservation={true}
						/>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<Mobile
				Slides={Slides}
				toggleDarkModeColor={toggleDarkModeColor}
				currentSlide={currentSlide}
				social={true}
				title={"Meet your soulmate in our exquisite cousine"}
				order={true}
			/>
			<Mobile
				Slides={Slides3}
				toggleDarkModeColor={toggleDarkModeColor}
				currentSlide={0}
				reservation={true}
				title={"Find yourself in the comfort of your meal"}
			/>
		</div>
	);
};

export default Home;
