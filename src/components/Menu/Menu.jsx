import React, { useEffect } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import SubMenus from "./SubMenus";
import { useDispatch, useSelector } from "react-redux";
import { subMenus } from "./SubMenus";
import { fetchMenu } from "../../features/MenuSlice";
import { async } from "@firebase/util";

const Menu = () => {
	const dispatch = useDispatch();

	const s = useSelector((state) => state.menu);

	useEffect(() => {
		const start = async () => {
			subMenus.map((subMenu) => {
				dispatch(fetchMenu(subMenu.name));
			});
		};

		start();
	}, []);

	return (
		<div className="Menu">
			<div className="Menu-wrapper w-full flex flex-col items-center justify-center mt-8">
				<div className="text-4xl md:text-5xl font-curs text-black/60">
					What to eat?
				</div>
				<div className="searchBar mt-4">
					<SearchBar />
				</div>
			</div>
			<div className="flex mt-6 flex-col md:flex-row">
				<div className="menu-types flex mt-2 md:mt-24 justify-center px-10">
					<SubMenus />
				</div>
				<div className="grow-[8]">
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default Menu;
