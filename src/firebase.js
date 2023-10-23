// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw7Sxc3MHpWFrFlj3wMTL7dnLwyBUAYTk",
  authDomain: "realtor-4d2e6.firebaseapp.com",
  projectId: "realtor-4d2e6",
  storageBucket: "realtor-4d2e6.appspot.com",
  messagingSenderId: "50039694853",
  appId: "1:50039694853:web:67ac4c48fcc2a165e39e6c",
  measurementId: "G-MFM1W8FBEZ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
initializeApp(firebaseConfig);
export const db = getFirestore();
