require("dotenv").config();
const axios = require("axios");
const { initializeApp } = require("firebase/app");
const { getFirestore, addDoc, collection, doc } = require("firebase/firestore");
const { getStorage, uploadBytes } = require("firebase/storage");

const firebaseConfig = {
	apiKey: "AIzaSyCnMFjTrLZmseiWRqePyEh5zIwp3_o8WlY",
	authDomain: "delizioso-fe406.firebaseapp.com",
	projectId: "delizioso-fe406",
	storageBucket: "delizioso-fe406.appspot.com",
	messagingSenderId: "245858416017",
	appId: "1:245858416017:web:7046b7dd2c3725a5631630",
};

const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
const API_ID = process.env.REACT_APP_EDAMAM_API_ID;

const url = (query) => {
	return `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_SPOON_API_KEY}`;
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const colRef = collection(db, `menu`);

const addData = async (colName, sQuery) => {
	const subCol = collection(db, "menu", "menu", colName);
	const fetch = async (query) => {
		await axios
			.get(url(query))
			.then((res) => {
				console.log(res.data.results.length);
				res.data.results.map((hit, i) => {
					addDoc(subCol, {
						name: hit.title,
						iurl: hit.image,
					});
				});
			})
			.catch((err) => {
				err;
				console.log("error");
				console.log(url(query));
			});
	};

	fetch(sQuery);
};

addData("dessert", "dessert");
