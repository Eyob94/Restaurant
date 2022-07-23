import { Button } from "@mui/material";
import React, { useEffect } from "react";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LiquorIcon from "@mui/icons-material/Liquor";
import { useDispatch, useSelector } from "react-redux";
import { choose, subMenuSelector } from "../../features/SubMenuSlice";
import { useGetMenuQuery } from "../../features/api/apiSlice";

export const subMenus = [
	{
		name: "pizza",
		icon: <LocalPizzaIcon />,
	},
	{
		name: "lasagna",
	},
	{
		name: "pasta",
	},
	{
		name: "ravioli",
	},
	{
		name: "wine",
		icon: <LiquorIcon />,
	},
	{
		name: "dessert",
		icon: <IcecreamIcon />,
	},
];

const SubMenus = () => {
	const dispatch = useDispatch();
	const selectedSubMenu = useSelector(subMenuSelector);

	const handleClick = (name) => {
		dispatch(choose(name));
	};

	return (
		<div className="flex md:flex-col">
			{subMenus.map((subMenu) => (
				<div key={subMenu.name}>
					<Button
						className={`capitlaize
						${
							selectedSubMenu.subMenu == subMenu.name
								? "shadow-md shadow-black/60 bg-white"
								: ""
						}
						text-md w-16 md:w-28 bg-inherit text-black/80 hover:shadow-md hover:shadow-black/60 mb-2 hover:bg-white flex items-center justify-center md:justify-between gap-1`}
						onClick={() => handleClick(subMenu.name)}
					>
						<div className="text-sm">{subMenu.icon}</div>
						<div className="capitalize hidden md:block">{subMenu.name}</div>
					</Button>
				</div>
			))}
		</div>
	);
};

export default SubMenus;
