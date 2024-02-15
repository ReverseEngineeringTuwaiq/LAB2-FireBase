// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAslN9_g_Zs8qIPp993oFWvax7SUZApo5c",
  authDomain: "crud-15aea.firebaseapp.com",
  databaseURL: "https://crud-15aea-default-rtdb.firebaseio.com",
  projectId: "crud-15aea",
  storageBucket: "crud-15aea.appspot.com",
  messagingSenderId: "1007796423937",
  appId: "1:1007796423937:web:3b86a17b003eb2d8df5f00"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }