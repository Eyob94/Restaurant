import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ImageVariant } from "./Variants";

const Images = ({ currentSlide, setCurrentSlide, Slides }) => {
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
	return (
		<>
			<motion.div
				className="right flex-1 relative h-full flex items-center justify-between gap-3 ml-auto"
				variants={ImageVariant}
				initial="initial"
				animate="animate"
			>
				<div
					className={`  relative rounded-3xl h-[60%] w-full  overflow-hidden self-center shadow-lg shadow-gray-900/50 scale-[110%]`}
				>
					<div className={`  h-full left-0 relative flex items-center `}>
						{Slides.map((img, i) => {
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
		</>
	);
};

export default Images;
