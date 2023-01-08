import 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR50VIhvWTMg-k5RT508JnUt9saEOsYM8",
  authDomain: "listtask-d82e1.firebaseapp.com",
  projectId: "listtask-d82e1",
  storageBucket: "listtask-d82e1.appspot.com",
  messagingSenderId: "997044590880",
  appId: "1:997044590880:web:da9bec2d4acde657b8df45"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };