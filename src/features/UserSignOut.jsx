import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const signOutUser = async () => {
	await signOut(auth).then(console.log("out"));
};
