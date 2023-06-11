import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4L2dU63ddQPPtsyRkllG2P6bHoJKoue4",
  authDomain: "pizza-v2-3bc14.firebaseapp.com",
  projectId: "pizza-v2-3bc14",
  storageBucket: "pizza-v2-3bc14.appspot.com",
  messagingSenderId: "543845403144",
  appId: "1:543845403144:web:35afc3cb81266c66885fbd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
