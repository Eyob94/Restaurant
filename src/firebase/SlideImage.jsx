import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
import { app, db } from "./config.jsx";

const storage = require("./config.jsx").storage;
const ref = require("firebase/storage").ref;
const uploadBytes = require("firebase/storage").uploadBytes;
const getDownloadURL = require("firebase/storage").getDownloadURL;

const datas = require("./slides.jsx");
const colRef = collection(db, "slides");

/* export const upload = () => {
	datas.map((data) => {
		const imageRef = ref(storage, `slides/${data.name}.png`);

		getDownloadURL(imageRef).then((url) => {
			addDoc(colRef, {
				name: data.name,
				url: url,
			});
		});
	});
}; */
