import { collection, onSnapshot } from "firebase/firestore";
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { db } from "../../firebase/config";
import { motion } from "framer-motion";
import {
	ContentChildVariant,
	ContentVariant,
	ImageVariant,
	MobileContentChildVariant,
	MobileContentVariant,
	MobileImageVariant,
	MobileSocialMediaChildVariant,
	MobileSocialMediaVariant,
	SlideVariant,
	SlideVatiant,
	socialMediaButton,
	socialMediaChildButtons,
} from "./Variants";
import Foods from "./img/foods.jpeg";
import Pasta from "./img/pasta.jpg";
import Pizza from "./img/pizza.jpg";
import Lasagna from "./img/lasagna.jpg";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { DarkModeContext } from "../../context/DarkModeProvider";
import { Box, Button } from "@mui/material";

const Images = [
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

	const [darkModeColor, setdarkModeColor] = useState();
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() =>
				setCurrentSlide((prev) => {
					if (prev >= Images.length - 1) {
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
		<div className="mx-0">
			{/* Desktop */}
			<div className="desktop md:flex hidden justify-around ">
				<div className="desktop-wrapper flex justify-between h-[660px]">
					{/* Left */}
					<motion.div
						className="left flex-1 mr-4 p-10 self-center"
						variants={ContentVariant}
						initial="initial"
						animate="animate"
					>
						<motion.div
							className={`text-4xl lg:text-6xl italic font-serif  self-center  ${toggleDarkModeColor(
								"text-gray-900",
								"text-goldenBrown"
							)}`}
							variants={ContentChildVariant}
						>
							Meet your soulmate in our exquisite dishes!
						</motion.div>
						<motion.div
							className={`text-md lg:text-lg font-serif mt-10 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text ${toggleDarkModeColor(
								"text-black",
								"text-goldenBrown"
							)}`}
							variants={ContentChildVariant}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							repudiandae quos consequatur omnis, amet modi nam, consectetur
						</motion.div>
						<motion.div
							className="buttons text-sm lg:text-md relative mt-6 flex gap-5"
							variants={ContentChildVariant}
						>
							<div
								className={`rounded-full border-2 ${toggleDarkModeColor(
									"border-green-600/90",
									"border-white"
								)}  px-4 ${toggleDarkModeColor(
									"text-green-600",
									"text-goldenBrown"
								)} flex p-2   cursor-pointer hover:shadow-xl hover:shadow-gray-900/50 
								${toggleDarkModeColor(
									"hover:bg-green-600",
									"hover:bg-goldenBrown"
								)} hover:text-white transition-all duration-300`}
							>
								Order Now
							</div>
							<div
								className={`rounded-full border-2 
								${toggleDarkModeColor("border-red-600/90", "border-white")} 
								px-4 ${toggleDarkModeColor(
									"text-red-600",
									"text-goldenBrown"
								)} flex p-2   cursor-pointer hover:shadow-xl hover:shadow-gray-900/50 
								${!darkMode ? "hover:bg-red-600" : "hover:bg-goldenBrown"}
								 hover:text-white transition-all duration-300`}
							>
								Book a reservation
							</div>
						</motion.div>
						<motion.div
							className="social-media-buttons flex gap-8 mt-10 justify-start
						"
							variants={socialMediaButton}
						>
							<motion.div
								className="facebook text-blue-800 border-2 border-white scale-125 cursor-pointer rounded-full p-2 shadow-sm shadow-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300"
								variants={socialMediaChildButtons}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-brand-facebook "
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
								</svg>
							</motion.div>
							<motion.div
								className="instagram scale-125 border-2 border-white cursor-pointer rounded-full p-2 shadow-sm shadow-violet-500 bg-gradient-to-tr from-yellow-200 via-pink-700 to-purple-600 text-purple-700 bg-clip-text hover:text-white hover:bg-clip-border transition-all duration-300"
								variants={socialMediaChildButtons}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-brand-instagram"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<rect x="4" y="4" width="16" height="16" rx="4"></rect>
									<circle cx="12" cy="12" r="3"></circle>
									<line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
								</svg>
							</motion.div>
							<motion.div
								className="twitter text-blue-400 border-2 border-white scale-125 cursor-pointer shadow-sm shadow-blue-500 rounded-full p-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
								variants={socialMediaChildButtons}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-brand-twitter "
									width="24"
									height="24"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
								</svg>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right */}
					<motion.div
						className="right flex-1 relative h-full flex items-center justify-between gap-3"
						variants={ImageVariant}
						initial="initial"
						animate="animate"
					>
						<div
							className={`  relative rounded-3xl h-[60%] w-full  overflow-hidden self-center shadow-lg shadow-gray-900/50 scale-[110%]`}
						>
							<div className={`  h-full left-0 relative flex items-center `}>
								{Images.map((img, i) => {
									return (
										<div
											className={`  top-0 left-0 absolute h-[100%] flex items-center`}
											key={img.src}
										>
											<img
												src={img.src}
												className={`object-cover ${
													i === currentSlide ? "opacity-1" : "opacity-0"
												} transition w-[100%] h-[100%] duration-1000`}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Mobile */}
			<div className="mobile md:hidden h-[60vh]">
				<motion.div
					className="mobile-wrapper flex justify-center mt-12 flex-col items-center mx-6 h-[100%]"
					variants={MobileContentVariant}
					initial="initial"
					animate="animate"
				>
					<motion.div
						className="img w-[100%] rounded-lg overflow-hidden  shadow-lg shadow-gray-700/50 h-[40%] h-full left-0 relative flex items-center "
						variants={MobileContentChildVariant}
					>
						{Images.map((img, i) => {
							return (
								<div
									className="top-0 left-0 absolute h-[100%] w-[100%] flex items-center"
									key={img.src}
								>
									<img
										src={img.src}
										className={`object-cover ${
											i === currentSlide ? "opacity-1" : "opacity-0"
										} transition w-[100%] h-[100%] duration-1000`}
									/>
								</div>
							);
						})}
					</motion.div>

					<motion.div className="writing realtive flex flex-col mt-8 justify-center items-center text-justify">
						<motion.div
							className={`text-2xl italic font-serif text-center self-center text-${toggleDarkModeColor(
								"gray-900"
							)}`}
							variants={MobileContentChildVariant}
						>
							Meet your soulmate in our exquisite cousine!
						</motion.div>
						<motion.div
							className={`text-sm text-center font-serif mt-4 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-${toggleDarkModeColor()}`}
							variants={MobileContentChildVariant}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
							repudiandae quos consequatur
						</motion.div>
					</motion.div>
					<motion.div
						className="buttons relative mt-6 flex gap-5"
						variants={MobileContentChildVariant}
					>
						<div
							className={`rounded-full text-sm border-2 ${toggleDarkModeColor(
								" border-green-600/90",
								" border-white"
							)}  px-4 ${toggleDarkModeColor(
								"text-green-600"
							)} flex p-2   cursor-pointer hover:shadow-xl hover:shadow-gray-900/50 
								hover:${toggleDarkModeColor(
									"bg-green-600/100",
									"bg-goldenBrown"
								)} hover:text-white transition-all duration-300`}
						>
							Order Now
						</div>
						<div
							className={`rounded-full border-2 text-sm
								${toggleDarkModeColor("border-red-600/90", " border-white")} 
								px-4 ${toggleDarkModeColor(
									"text-red-600",
									"text-goldenBrown"
								)} flex p-2   cursor-pointer hover:shadow-xl hover:shadow-gray-900/50 hover:${toggleDarkModeColor(
								"bg-red-600/100",
								"bg-goldenBrown"
							)} hover:text-white transition-all duration-300`}
						>
							Book a reservation
						</div>
					</motion.div>

					<motion.div
						className="social-media-buttons flex gap-8 mt-4 justify-start
						"
						variants={MobileSocialMediaVariant}
					>
						<motion.div
							className="facebook text-blue-800 cursor-pointer rounded-full p-2 shadow-sm shadow-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300"
							variants={MobileSocialMediaChildVariant}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-brand-facebook "
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
							</svg>
						</motion.div>
						<motion.div
							variants={MobileSocialMediaChildVariant}
							className="instagram cursor-pointer rounded-full p-2 shadow-sm shadow-violet-500 bg-gradient-to-tr from-yellow-200 via-pink-700 to-purple-600 text-purple-700 bg-clip-text hover:text-white hover:bg-clip-border transition-all duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-brand-instagram"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<rect x="4" y="4" width="16" height="16" rx="4"></rect>
								<circle cx="12" cy="12" r="3"></circle>
								<line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
							</svg>
						</motion.div>
						<motion.div
							variants={MobileSocialMediaChildVariant}
							className="twitter text-blue-500 cursor-pointer shadow-sm shadow-blue-500 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-brand-twitter "
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
							</svg>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
