// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCey9hd63LmIRAya9HNj72zN_8Z1AWHNOk",
  authDomain: "pmpage-a8fb8.firebaseapp.com",
  projectId: "pmpage-a8fb8",
  storageBucket: "pmpage-a8fb8.firebasestorage.app",
  messagingSenderId: "590147961688",
  appId: "1:590147961688:web:f153d6c22fa5e2a3cddb2d",
  measurementId: "G-P4XYBQJZ1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);