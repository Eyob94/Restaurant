import React from "react";
import { UserVariant } from "./Variants";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { signOutUser } from "../../features/UserSignOut";
import { auth } from "../../firebase/config";
import { userSignOut } from "../../features/UserSlice";

const AccountMenu = ({ showOptions, dispatch, toggleLogin, toggleSignUp }) => {
	const { user } = useSelector((state) => state.user);

	return (
		<>
			{showOptions && (
				<motion.div
					className="user-options flex flex-col gap-2 border-2 justify-center items-center border-green-600/80 divide-gray-900/80 absolute w-28 -left-10 shadow-lg shadow-gray-600/80 text-sm p-3 bg-white rounded font-bold mt-2"
					variants={UserVariant}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					{!user ? (
						<div>
							<Button
								className="option cursor-pointer text-green-500 hover:text-black transform-none capitalize hover:shadow-md hover:shadow-gray-700/50"
								onClick={() => dispatch(toggleLogin())}
							>
								Log in
							</Button>
							<hr />
							<Button
								className="option cursor-pointer text-green-500 hover:text-black transform-none capitalize hover:shadow-md hover:shadow-gray-700/50"
								onClick={() => dispatch(toggleSignUp())}
							>
								Sign up
							</Button>
						</div>
					) : (
						<div>
							<Button
								className="option cursor-pointer text-green-500 hover:text-black transform-none capitalize hover:shadow-md hover:shadow-gray-700/50"
								onClick={() => dispatch(userSignOut())}
							>
								Sign out
							</Button>
						</div>
					)}
				</motion.div>
			)}
		</>
	);
};

export default AccountMenu;
