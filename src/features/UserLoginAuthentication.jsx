import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const loginUser = async (email, password) => {
	const user = await signInWithEmailAndPassword(auth, email, password)
		.then((credentials) => credentials.user)
		.catch((err) => {
			throw new Error(err);
		});

	return user;
};
