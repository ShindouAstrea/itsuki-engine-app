// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK9Eo3jBZezJ7z2MT7l-jpAtB6eNpCbi4",
  authDomain: "itsuki-engine.firebaseapp.com",
  projectId: "itsuki-engine",
  storageBucket: "itsuki-engine.appspot.com",
  messagingSenderId: "348429015261",
  appId: "1:348429015261:web:4bbddec27c7e690cb26334",
  measurementId: "G-EF0RTTMVXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);