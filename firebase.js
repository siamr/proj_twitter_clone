// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-NxfU2XFNNVCZ-NjAcWRkoR8897BaiKI",
    authDomain: "twitter-clone-7acc6.firebaseapp.com",
    projectId: "twitter-clone-7acc6",
    storageBucket: "twitter-clone-7acc6.appspot.com",
    messagingSenderId: "484608962421",
    appId: "1:484608962421:web:70b3d9c2b2b15a6ee8ed3c"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };