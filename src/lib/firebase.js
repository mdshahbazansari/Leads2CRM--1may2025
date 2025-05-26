import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNlwf9tzNtBnuuixaL0j9UMn9Gt-DYRUY",
  authDomain: "leads2crm-website.firebaseapp.com",
  projectId: "leads2crm-website",
  storageBucket: "leads2crm-website.firebasestorage.app",
  messagingSenderId: "706834284724",
  appId: "1:706834284724:web:1c1b397369e056966897e1",
  measurementId: "G-QW7M9JF6QP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
