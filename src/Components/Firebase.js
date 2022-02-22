// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0OlTCOMap1Yh4hAeAV4PDKHZzsZPdlqI",
  authDomain: "personal-website-fdaed.firebaseapp.com",
  projectId: "personal-website-fdaed",
  storageBucket: "personal-website-fdaed.appspot.com",
  messagingSenderId: "890650736849",
  appId: "1:890650736849:web:c3fb5dd1928ac01cac2df0",
  measurementId: "G-ERRLWLK5DL"
};

// Initialize Firebase
const FireBase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(FireBase);

export default FireBase;