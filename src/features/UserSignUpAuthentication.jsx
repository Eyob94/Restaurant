import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const createUser = async (email, password) => {
	const user = await createUserWithEmailAndPassword(auth, email, password).then(
		(credentials) => credentials.user
	);

	await sendEmailVerification(auth.currentUser);

	return user;
};
