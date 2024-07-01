/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZpE6Pjb6Ktm9qkrnAexFvnO01cGNPaec",
  authDomain: "crud-data-animals.firebaseapp.com",
  databaseURL: "https://crud-data-animals-default-rtdb.firebaseio.com",
  projectId: "crud-data-animals",
  storageBucket: "crud-data-animals.appspot.com",
  messagingSenderId: "47210319465",
  appId: "1:47210319465:web:90c237e2111f7713ca1cf8",
  measurementId: "G-NJJZ9LPMGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
