import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { ImageVariant } from "./Variants";

const Images = ({ currentSlide, setCurrentSlide, Slides }) => {
	return (
		<>
			<motion.div
				className="flex-1 relative h-full flex items-center justify-between gap-3 ml-auto"
				variants={ImageVariant}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
			>
				<div
					className={`  relative rounded-2xl h-[60%] w-full  overflow-hidden self-center shadow-lg shadow-gray-900/50 scale-[110%]`}
				>
					<div className={`  h-full  relative flex items-center `}>
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
										} transition w-[110%] h-[110%] duration-1000`}
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
