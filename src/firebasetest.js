import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore -> je connectie
export const db = getFirestore(app);