// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAci7kFYZxDnfTB9Ty5mz6jm6kxUljmtqY",
  authDomain: "reactjs-1e8a9.firebaseapp.com",
  projectId: "reactjs-1e8a9",
  storageBucket: "reactjs-1e8a9.appspot.com",
  messagingSenderId: "516930898071",
  appId: "1:516930898071:web:e65de75b0d6836f00941d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//--------------
export const db = getFirestore(app);