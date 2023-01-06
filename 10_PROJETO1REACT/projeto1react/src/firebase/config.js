import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVJbPz5jumnVgNgW31iVExjSEZRgGLcXQ",
  authDomain: "projeto1react-92f8e.firebaseapp.com",
  projectId: "projeto1react-92f8e",
  storageBucket: "projeto1react-92f8e.appspot.com",
  messagingSenderId: "822527967614",
  appId: "1:822527967614:web:8dcfe0ce9d1c4e104cf32f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };


