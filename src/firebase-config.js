// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJmHr7DjkSr0kKwILQL0e9UGOr6fLA3TM",
  authDomain: "winter-field-348417.firebaseapp.com",
  projectId: "winter-field-348417",
  storageBucket: "winter-field-348417.appspot.com",
  messagingSenderId: "368480161571",
  appId: "1:368480161571:web:bd38efebf041dfb993c696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

