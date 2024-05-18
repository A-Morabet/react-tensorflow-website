import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDbgVwtz16yV_M50qdAQg0XEfAba44EzI0",
  authDomain: "zoolens-ai.firebaseapp.com",
  projectId: "zoolens-ai",
  storageBucket: "zoolens-ai.appspot.com",
  messagingSenderId: "668560695299",
  appId: "1:668560695299:web:99cc106f5490f1e0d02e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app