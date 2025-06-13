import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnIKIVW3gA4Nx7Fy3clJVSmBfMgR5NMdg",
  authDomain: "prepwise-fa617.firebaseapp.com",
  projectId: "prepwise-fa617",
  storageBucket: "prepwise-fa617.firebasestorage.app",
  messagingSenderId: "441865833365",
  appId: "1:441865833365:web:67e7aee8958c5a0627449c",
  measurementId: "G-1RBR90TGN6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);