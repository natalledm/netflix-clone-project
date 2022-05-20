import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwljFg8qWgMWgcMmF693T5NXrsWWECzS4",
  authDomain: "netflix-clone-project-825bf.firebaseapp.com",
  projectId: "netflix-clone-project-825bf",
  storageBucket: "netflix-clone-project-825bf.appspot.com",
  messagingSenderId: "115944031103",
  appId: "1:115944031103:web:bc226adb78db13c03c104a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const cloudStorage = getStorage(app);
