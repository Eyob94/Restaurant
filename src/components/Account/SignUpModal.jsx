import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, inputFieldClasses, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin, toggleSignUp } from "../../features/ModalSlice";
import { Show } from "./Variants";
import { AnimatePresence, motion } from "framer-motion";
import { userSignUp } from "../../features/UserSlice";
import { auth } from "../../firebase/config";
import Spinner from "../Spinner/Spinner";

const inputFields = [
	{
		label: "Full Name",
		type: "text",
		ref: "nameRef",
	},
	{
		label: "Email",
		type: "email",
	},
	{
		label: "Password",
		type: "password",
	},
	{
		label: "Confirm Password",
		type: "password",
	},
];

const SignUpModal = () => {
	const { SignUp, Login } = useSelector((state) => state.modal);
	const { user, loading, error } = useSelector((state) => state.user);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [image, setImage] = useState();
	const [innerError, setInnerError] = useState();

	const confirmPasswordRef = useRef();

	const dispatch = useDispatch();

	const verifyUserCreation = async (e) => {
		e.preventDefault();
		console.log(password);
		if (password.length >= 8 && password == confirmPasswordRef.current.value) {
			dispatch(userSignUp({ email, password, image }));
			setInnerError(null);
		} else {
			setInnerError("Password too short or don't match");
		}
	};

	return (
		<AnimatePresence>
			<div className="wrapper w-screen h-screen transition-all">
				<div className="wrapper w-full h-full flex justify-center items-center bg-gradient-to-r from-green-700/60 via-white/20 to-red-700/60">
					<motion.div
						className="modal w-[80%] md:w-[35%]  xl:w-[30%] h-[75%] md:h-[75%] bg-white rounded-2xl shadow-xl shadow-gray-600/70 flex flex-col p-6 relative"
						variants={Show}
						initial="initial"
						animate="animate"
					>
						{!loading ? (
							<>
								<div
									className="close-icon text-bold self-end cursor-pointer hover:text-red-500"
									onClick={() => dispatch(toggleSignUp())}
								>
									<CloseIcon />
								</div>

								<div className="avatar w-28 h-28 rounded-full flex-col cursor-pointer hover:bg-green-600 shadow-lg border-2 border-white shadow-gray-900/50 bg-green-700 relative self-center overflow-hidden flex justify-center items-center">
									<label
										htmlFor="avatar-upload"
										className=" cursor-pointer relative rounded-full overflow-hidden w-[100%] h-[100%] p-4 "
									>
										{image ? (
											<img
												src={URL.createObjectURL(image)}
												className="h-max w-max object-cover scale-[1]"
											/>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="icon icon-tabler icon-tabler-user w-full h-full text-white"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												strokeWidth="2"
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path
													stroke="none"
													d="M0 0h24v24H0z"
													fill="none"
												></path>
												<circle cx="12" cy="7" r="4"></circle>
												<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
											</svg>
										)}
										<input
											type="file"
											id="avatar-upload"
											className="hidden"
											onChange={(e) => {
												setImage(e.target.files[0]);
											}}
										/>
									</label>
								</div>
								<form onSubmit={(e) => verifyUserCreation(e)}>
									<div className="input flex flex-col mt-4 self-center justify-center w-full px-4 md:px-12 text-sm">
										{inputFields.map((inputField, i) => {
											return (
												<div
													key={inputField.label}
													className="name w-full mt-1"
												>
													<TextField
														error={Boolean(innerError)}
														autoComplete="new-password"
														color="success"
														id={`standard-basic-${i}`}
														label={inputField.label}
														variant="standard"
														className="w-full"
														required={true}
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
														inputRef={
															inputField.label == "Confirm Password"
																? confirmPasswordRef
																: null
														}
													/>
												</div>
											);
										})}
									</div>
									{innerError || error ? (
										<div className="text-red-600 self-center flex justify-center mt-4">
											{innerError
												? innerError
												: error.message
														?.split("/")[1]
														?.split(")")[0]
														?.split("-")
														?.join(" ")}
										</div>
									) : (
										""
									)}
									<div className="flex justify-center items-center mt-4">
										<Button
											type="submit"
											className="rounded-full text-white bg-green-600 p-2 px-8 shadow-md shadow-gray-500 cursor-pointer hover:bg-green-500 pointer-events-auto"
										>
											Sign Up
										</Button>
									</div>
									<div className="hover:text-green-600 relative cursor-pointer flex justify-center mt-4 text-sm text-gray-400 self-center justify-self-center w-[100%]">
										<div
											className=""
											onClick={() => {
												dispatch(toggleSignUp());
												dispatch(toggleLogin());
											}}
										>
											Already have an account?
										</div>
									</div>
								</form>
							</>
						) : (
							<div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
								<Spinner color="after:bg-green-500" />
								<div className="mt-4">Creating account</div>
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
	);
};

export default SignUpModal;
