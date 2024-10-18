// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-XQm8aSNVjmPCGVkDtZbWIqWOIEBxVN4",
  authDomain: "week7-xiran.firebaseapp.com",
  projectId: "week7-xiran",
  storageBucket: "week7-xiran.appspot.com",
  messagingSenderId: "472158573131",
  appId: "1:472158573131:web:6887c5689f0dd42bd033ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db