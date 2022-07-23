import { Button } from "@mui/material";
import React from "react";

const SearchBar = () => {
	return (
		<div className="w-[75vw] md:[50vw]">
			<div className="bg-white shadow-inner shadow-black/50 w-[100%] h-[40px] rounded-full flex overflow-hidden p-2">
				<input
					className="w-[100%] rounded-full outline-none px-4"
					placeholder="Search..."
				/>
				<Button className="rounded-full p-2 px-4 scale-[125%] active:shadow-none mr-2 overflow-hidden bg-green-300/100 shadow-md text-black/70 font-serif capitalize shadow-gray-900/50 relative hover:bg-green-400">
					<div className="px-2 absolute">Search</div>
				</Button>
			</div>
		</div>
	);
};

export default SearchBar;
