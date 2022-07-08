import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { SideMenuVariant, UserVariant } from "./Variants";

const Navbar = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [showSideMenu, setShowSideMenu] = useState(false);

	const handleUserClick = () => {
		setShowOptions((prev) => !prev);
	};

	const handleSideMenuClick = () => {
		setShowSideMenu((prev) => !prev);
	};

	return (
		<div className="shadow-md shadow-gray-700/30 bg-[FFFEF2]">
			<div className="flex justify-between lg:mx-20 mx-4 mt-5 items-center">
				<div className="logo md:text-6xl text-5xl py-1 px-3 font-bold font-italianno bg-gradient-to-r from-green-500 via-white to-red-500 text-transparent bg-clip-text ">
					Delizioso
				</div>

				<div className="nav-lists md:flex xl:gap-24 md:gap-12 self-center hidden">
					<div className="nav-link">Home</div>
					<div className="nav-link">Reservation</div>
					<div className="nav-link">Menu</div>
					<div className="nav-link">About</div>
					<div className="nav-link">Contact</div>
				</div>

				<div className="user-info md:flex xl:gap-16 md:gap-10 items-center hidden">
					<div className="user text-gray-600 scale-125 cursor-pointer relative">
						<div
							className="user-avatar text-green-700"
							onClick={handleUserClick}
						>
							<AccountCircleIcon />
						</div>

						<AnimatePresence>
							{showOptions && (
								<motion.div
									className="user-options flex flex-col gap-2 divide-y-2 divide-gray-900/80 absolute w-24 -left-4 shadow-md shadow-gray-500/80 text-sm p-3 rounded font-bold"
									variants={UserVariant}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<div className="option cursor-pointer hover:text-black">
										Log in
									</div>

									<div className="option cursor-pointer hover:text-black">
										Sign up
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<div className="cart-item text-red-700 scale-125 cursor-pointer">
						<ShoppingCartIcon />
					</div>
				</div>

				<div className="hidden-menu md:hidden block relative">
					<div
						className="burger-menu cursor-pointer"
						onClick={handleSideMenuClick}
					>
						{!showSideMenu ? <MenuIcon /> : <CloseIcon />}
					</div>
					<AnimatePresence>
						{showSideMenu && (
							<motion.div
								className="side-menu absolute -left-32 text-green-600 mt-4 h-80 p-4  rounded-xl shadow-xl shadow-gray-700/80 divide-y-2 divide-gray-900/100 flex flex-col"
								variants={SideMenuVariant}
								initial="initial"
								animate="animate"
								exit="initial"
							>
								<div className="side-menu-main flex flex-col gap-3">
									<div className="font-mono text-xl cursor-pointer  hover:text-black">
										Home
									</div>
									<div className="font-mono text-xl cursor-pointer  hover:text-black">
										Reservation
									</div>
									<div className="font-mono text-xl cursor-pointer hover:text-black">
										Menu
									</div>
									<div className="font-mono text-xl cursor-pointer  hover:text-black">
										About
									</div>
									<div className="font-mono text-xl cursor-pointer  hover:text-black">
										Contact
									</div>
								</div>
								<div className="side-menu-user mt-5 flex flex-col gap-3 text-lg text-red-700">
									<div className="option font-serif cursor-pointer hover:text-black">
										Log in
									</div>

									<div className="option font-serif cursor-pointer hover:text-black">
										Sign up
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
