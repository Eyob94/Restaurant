import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleSignUp } from "../../features/ModalSlice";
import { Show } from "./Variants";
import { motion } from "framer-motion";
import { clearError, userSignIn } from "../../features/UserSlice";
import Spinner from "../Spinner/Spinner";

const inputFields = [
	{
		label: "Email",
		type: "email",
	},
	{
		label: "Password",
		type: "password",
	},
];

const LoginModal = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const clearRef = useRef();

	const { user, loading, error } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const handleSignIn = (e) => {
		e.preventDefault();
		dispatch(userSignIn({ email, password }));
	};

	console.log(email);

	const handleClose = () => {
		dispatch(toggleLogin());
		dispatch(clearError());
	};

	return (
		<div className="wrapper w-screen h-screen transition-all">
			<div className="wrapper w-full h-full flex justify-center items-center bg-gradient-to-r from-green-700/60 via-white/20 to-red-700/60">
				<motion.div
					className="modal w-[80%] md:w-[45%] xl:w-[25%] h-[60%] md:h-[60%] bg-white rounded-2xl shadow-xl justify-center shadow-gray-600/70 flex flex-col p-6"
					variants={Show}
					initial="initial"
					animate="animate"
				>
					{!loading ? (
						<>
							<div
								className="close-icon text-bold self-end cursor-pointer hover:text-red-500"
								onClick={handleClose}
							>
								<CloseIcon />
							</div>
							<div className="text-4xl italic font-serif text-green-600 self-center mt-6 mb-4">
								Welcome
							</div>

							<form onSubmit={(e) => handleSignIn(e)}>
								<div className="input flex flex-col self-center w-full px-0 md:px-12 text-sm">
									{inputFields.map((inputField, i) => {
										return (
											<div
												key={inputField.label}
												className="name w-[100%] mt-1"
											>
												<TextField
													autoComplete="new-password"
													error={Boolean(error)}
													color="success"
													id={`standard-basic-${i}`}
													label={inputField.label}
													variant="standard"
													className="w-full"
													type={inputField.type}
													sx={{
														fontSize: ".5rem",
														placeholder: {
															fontSize: ".25rem",
														},
													}}
													onChange={
														inputField.label === "Email"
															? (e) => setEmail(e.target.value)
															: inputField.label === "Password"
															? (e) => setPassword(e.target.value)
															: null
													}
													inputRef={clearRef}
												/>
											</div>
										);
									})}
								</div>
								{error && (
									<div className="self-center  flex justify-center items-center mt-2 text-red-600">
										{error.message}
									</div>
								)}
								<div className="flex justify-center items-center mt-6">
									<Button
										type="submit"
										className="rounded-full text-white disabled bg-green-600 p-2 px-8 shadow-md shadow-gray-500 cursor-pointer hover:bg-green-500 pointer-events-auto"
									>
										Login
									</Button>
								</div>
								<div className=" relative cursor-pointer flex flex-col justify-center mt-4 text-sm text-gray-400 self-center justify-self-center w-[100%]">
									<div
										className="flex justify-center hover:text-green-600"
										onClick={() => {
											dispatch(toggleLogin());
											dispatch(toggleSignUp());
										}}
									>
										Don't have an account?
									</div>
									<div
										className="flex justify-center mt-1 hover:text-green-600"
										onClick={() => {
											dispatch(toggleLogin());
											dispatch(toggleSignUp());
										}}
									>
										Forgot Password?
									</div>
								</div>
							</form>
						</>
					) : (
						<div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
							<Spinner color="after:bg-green-500" />
							<div className="mt-4">Signing In</div>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default LoginModal;
