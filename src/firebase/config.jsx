import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCnMFjTrLZmseiWRqePyEh5zIwp3_o8WlY",
	authDomain: "delizioso-fe406.firebaseapp.com",
	projectId: "delizioso-fe406",
	storageBucket: "delizioso-fe406.appspot.com",
	messagingSenderId: "245858416017",
	appId: "1:245858416017:web:7046b7dd2c3725a5631630",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
