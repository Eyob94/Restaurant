import React from "react";
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

const Text = ({
	toggleDarkModeColor,
	darkMode,
	Title,
	subTitle,
	social,
	order,
	reservation,
}) => {
	return (
		<>
			<motion.div
				className="left flex-1 mr-4 p-10 self-center"
				variants={ContentVariant}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
			>
				<motion.div
					className={`text-4xl lg:text-6xl italic font-serif  self-center  ${toggleDarkModeColor(
						"text-gray-900",
						"text-goldenBrown"
					)}`}
					variants={ContentChildVariant}
				>
					{Title}
				</motion.div>
				<motion.div
					className={`text-md lg:text-lg font-serif mt-10 bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text ${toggleDarkModeColor(
						"text-black",
						"text-goldenBrown"
					)}`}
					variants={ContentChildVariant}
				>
					{subTitle}
				</motion.div>
				<motion.div
					className="buttons text-sm lg:text-md relative mt-6 flex gap-5"
					variants={ContentChildVariant}
				>
					{order && (
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
					)}
					{reservation && (
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
					)}
				</motion.div>
				{social && (
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
				)}
			</motion.div>
		</>
	);
};

export default Text;
