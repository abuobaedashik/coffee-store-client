
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDShmStVKcDCJBtfUArBiOlBmk1A-lHpkA",
  authDomain: "coffee-store-fa73a.firebaseapp.com",
  projectId: "coffee-store-fa73a",
  storageBucket: "coffee-store-fa73a.firebasestorage.app",
  messagingSenderId: "602589565360",
  appId: "1:602589565360:web:715d16588e02aa24200675",
  measurementId: "G-D4Y8GRNWBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth(app);