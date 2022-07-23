import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";

import Card from "./Card";

const Cards = () => {
	const data = useSelector((state) => state.menu);
	const subMenu = useSelector((state) => state.subMenu);

	const foods = data.menu[subMenu.subMenu];
	console.log(foods);

	return (
		<div className="w-[100%] min-h-[100%] p-4">
			<div className="bg-gray-50 min-w-max rounded-tl-[3rem] shadow-lg shadow-black/60 rounded-tr-[3rem] md:rounded-tr-none p-10 gap-6 grid grid-cols-1 auto-rows-fr grid-flow-row md:grid-flow-col md:auto-cols-fr md:grid-rows-3">
				{foods?.map((food) => {
					console.log(food.iurl);
					return (
						<>
							<Card name={food.name} img={food.iurl} />
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
