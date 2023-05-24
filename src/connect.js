// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGwBZ_CCciHrUgHBW-v29FWOJvLf6VgYI",
  authDomain: "frondendsocialmedia.firebaseapp.com",
  projectId: "frondendsocialmedia",
  storageBucket: "frondendsocialmedia.appspot.com",
  messagingSenderId: "896474517660",
  appId: "1:896474517660:web:29897b6adbcf95fa415d59",
  measurementId: "G-RCBD4Y0XYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);