import React from "react";
import Pasta from "../Home/img/pasta.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";
import { nanoid } from "@reduxjs/toolkit";

const Card = ({ name, img }) => {
	return (
		<div>
			<div className="rounded-lg max-w-[300px] min-w-[300px] md:min-w-[250px] md:max-w-[250px] bg-red-200 shadow-md shadow-gray-600/60 overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out active:opacity-75 min-h-[380px] max-h-[380px] flex flex-col">
				<div className="relative max-h-[50%] min-h-[140px] overflow-hidden grow-0">
					<img src={img} className="object-cover" />
					<div className="favorite absolute top-0 left-auto p-2 text-red-500">
						<FavoriteIcon />
					</div>
				</div>
				<div className=" bg-white z-50 p-4 text-center flex flex-col justify-between flex-grow-1 h-[15.5rem]">
					<div className="Name text-xl font-bold">{name}</div>
					<div className="details text-[.75rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
					</div>
					<div className="calorie-rating text-yellow-500 scale-75 mt-1">
						{Array.from({ length: 5 }).map((arr) => {
							return (
								<span key={nanoid()}>
									<StarIcon />
								</span>
							);
						})}
					</div>
					<div className="price-order flex justify-around items-center mt-4">
						<div className="price  font-bold flex items-center">$15</div>

						<div className="order-btn text-xl hover:shadow-sm hover:shadow-gray-900/40 text-white font-bold p-1 px-3 flex items-center  active:shadow-none bg-yellow-400 rounded-md overflow-hidden">
							<ShoppingCartOutlinedIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
