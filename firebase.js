// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjTCDII2_mXhgSqMscxs-aXK61TlYOj_k",
  authDomain: "pantrytracker-268f1.firebaseapp.com",
  projectId: "pantrytracker-268f1",
  storageBucket: "pantrytracker-268f1.appspot.com",
  messagingSenderId: "882161677506",
  appId: "1:882161677506:web:e3c0f28442c9ba8eb9b75b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };