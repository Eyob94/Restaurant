import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { motion, AnimatePresence } from "framer-motion";
import { SideMenuVariant, UserVariant } from "./Variants";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/DarkModeProvider";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignUp, toggleLogin } from "../../features/ModalSlice";
import { Button } from "@mui/material";
import AccountMenu from "./AccountMenu";
import { userSignOut } from "../../features/UserSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const { user, loading, error } = useSelector((state) => state.user);

	//Retrieving the context for darkMode
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	//Using state to show the uer-options
	const [showOptions, setShowOptions] = useState(false);

	//Using state to show the side-menu
	const [showSideMenu, setShowSideMenu] = useState(false);

	//State to change color in response to darkMode
	const [color, setColor] = useState(`gray-900`);

	//Function to toggle the user options
	const handleUserClick = () => {
		setShowOptions((prev) => !prev);
	};

	//Function to toggle the side-menu
	const handleSideMenuClick = () => {
		setShowSideMenu((prev) => !prev);
	};

	//Function to change color
	const toggleColor = () => {
		if (color == `[#B5986D]`) {
			setColor(`gray-900`);
		} else {
			setColor(`[#B5986D]`);
		}
	};

	//Function to be invoked when darkMode is changed
	const toggleChange = () => {
		toggleDarkMode();
		toggleColor();
	};

	return (
		<div className="sticky">
			<div className="relative z-50">
				{/* Start of desktop navbar */}
				<div className="desktop md:flex justify-between lg:mx-20 mx-4 mt-2 items-center hidden ">
					{/* Dark Mode button */}
					<div
						className="dark-mode md:block hidden mr-16"
						onClick={toggleChange}
					>
						<div
							className={`w-11 rounded-3xl h-5 shadow-inner shadow-gray-500/80 flex justify-around items-center cursor-pointer ${
								darkMode
									? `bg-gray-50`
									: `bg-gradient-to-r from-green-600 via-white to-red-600`
							}  relative`}
						>
							<div
								className={`rounded-full shadow-sm shadow-gray-500/80 w-[1.1rem] ml-0.5 h-[1.1rem] bg-yellow-50 absolute ${
									darkMode ? `left-2/4` : `left-0`
								} z-50 transition-all`}
							></div>
							<div className="darkmode-icons flex items-center justify-around mx-6">
								<div className="darkmode-icon scale-75 text-[#B5986D] font-bold">
									<DarkModeOutlined />
								</div>
								<div className="darkmode-icon scale-75 text-yellow-300 font-bold">
									<WbSunnyIcon />
								</div>
							</div>
						</div>
					</div>
					{/* Nav-links */}
					<div
						className={`nav-lists md:flex xl:gap-24 md:gap-12 self-center hidden mx-auto text-${color}`}
					>
						<div className={`nav-link flex items-center `}>
							<NavLink to="/">Home</NavLink>
						</div>
						<div className={`nav-link flex items-center`}>
							<NavLink to="/menu">Menu</NavLink>
						</div>

						<div className="logo md:text-6xl text-5xl py-1 px-3 font-italianno transition-all">
							Delizioso
						</div>
						<div className={`nav-link flex items-center`}>
							<NavLink to="/about">About</NavLink>
						</div>
						<div className={`nav-link flex items-center`}>
							<NavLink to="/contact">Contact</NavLink>
						</div>
					</div>
					{/* User and cart button */}
					<div className="user-info md:flex xl:gap-12 md:gap-10 items-center hidden">
						<div className={`user cursor-pointer relative`}>
							<div
								className={`user-avatar rounded-full border-2 border-${color} p-1 shadow-sm shadow-black hover:shadow-md hover:shadow-black 
								${darkMode ? `hover:bg-white` : `hover:bg-gray-300`}
								
								text-${color}`}
								onClick={handleUserClick}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-user"
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
									<circle cx="12" cy="7" r="4"></circle>
									<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
								</svg>
							</div>

							<AccountMenu
								showOptions={showOptions}
								dispatch={dispatch}
								toggleLogin={toggleLogin}
								toggleSignUp={toggleSignUp}
							/>
						</div>
						{user && (
							<div className="cart-item cursor-pointer relative">
								<div
									className={`user-avatar rounded-full border-2 border-${color} p-1 shadow-sm shadow-black hover:shadow-md hover:shadow-black 
								${darkMode ? `hover:bg-white` : `hover:bg-gray-300`}
								
								text-${color}`}
								>
									<ShoppingCartIcon />
									{user?.cartItems?.length > 0 && (
										<div
											className={`badge w-4 h-4 border-2 border-${color} absolute rounded-full top-1 left-5 text-xs flex items-center justify-center bg-red-500  text-white`}
										>
											{user?.cartItems?.length}
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
				{/* 
						End of desktop navbar
				*/}

				{/* 
					Mobile navbar
				*/}

				<div
					className={`mobile-menu flex items-center justify-between mx-3 mt-2 text-${color} z-50 relative`}
				>
					<div className="logo md:text-6xl text-5xl py-1 px-3 font-italianno md:hidden block">
						Delizioso
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
									className="side-menu absolute -left-32  mt-4 h-100 p-4 justify-center items-center  rounded-xl shadow-lg shadow-black/50 bg-white divide-gray-900/100 flex flex-col"
									variants={SideMenuVariant}
									initial="initial"
									animate="animate"
									exit="initial"
								>
									<div className="side-menu-main flex flex-col gap-2 justify-center items-center">
										<Button className="mb-2 mr-4 text-lg cursor-pointer text-green-600   hover:text-black bg-white hover:shadow-md hover:shadow-gray-800/40">
											Home
										</Button>

										<Button className="mb-2 mr-4 text-lg cursor-pointer text-green-600   hover:text-black bg-white hover:shadow-md hover:shadow-gray-800/40">
											Menu
										</Button>
										<Button className="mb-2 mr-4 text-lg cursor-pointer text-green-600  hover:text-black bg-white hover:shadow-md hover:shadow-gray-800/40">
											About
										</Button>
										<Button className="mb-2 mr-4 text-lg cursor-pointer text-green-600    hover:text-black bg-white hover:shadow-md hover:shadow-gray-800/40">
											Contact
										</Button>
									</div>
									<hr />
									<div className="side-menu-user mt-5 flex flex-col gap-3 text-lg text-green-700">
										{!user ? (
											<>
												<div
													className="option font-serif cursor-pointer hover:text-black"
													onClick={() => dispatch(toggleLogin())}
												>
													Log in
												</div>

												<div
													className="option font-serif cursor-pointer hover:text-black"
													onClick={() => dispatch(toggleSignUp())}
												>
													Sign up
												</div>
											</>
										) : (
											<>
												<div
													className="option font-serif cursor-pointer hover:text-black"
													onClick={() => dispatch(userSignOut())}
												>
													Sign Out
												</div>
											</>
										)}
									</div>
									<div
										className="dark-mode mt-10 mx-auto"
										onClick={toggleChange}
									>
										<div
											className={`w-11 rounded-3xl h-5 shadow-inner shadow-gray-500/80 flex justify-around items-center cursor-pointer ${
												darkMode
													? `bg-gray-50`
													: `bg-gradient-to-r from-green-600 via-white to-red-600`
											}  relative`}
										>
											<div
												className={`rounded-full shadow-sm shadow-gray-500/80 w-[1.1rem] ml-0.5 h-[1.1rem] bg-yellow-50 absolute ${
													darkMode ? `left-2/4` : `left-0`
												} z-50 transition-all`}
											></div>
											<div className="darkmode-icons flex items-center justify-around mx-6">
												<div className="darkmode-icon scale-75 text-gray-800 font-bold">
													<DarkModeOutlined />
												</div>
												<div className="darkmode-icon scale-75 text-yellow-300 font-bold">
													<WbSunnyIcon />
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
