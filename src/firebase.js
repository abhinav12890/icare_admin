import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxjaKjSi92CO3yqugda4HiOMPixxmukko",
  authDomain: "project-804c8.firebaseapp.com",
  projectId: "project-804c8",
  storageBucket: "project-804c8.appspot.com",
  messagingSenderId: "260281956229",
  appId: "1:260281956229:web:0ace6fde93068bbbc4b6ec",
  measurementId: "G-W47ZS4EYH6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
