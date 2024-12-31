import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9CyM0-LN2tFoB5Ejbab5ST9O1ZgqXSLI",
  authDomain: "pytaia.firebaseapp.com",
  projectId: "pytaia",
  storageBucket: "pytaia.firebasestorage.app",
  messagingSenderId: "800279701681",
  appId: "1:800279701681:web:00042d0ece924412401a90",
  measurementId: "G-3Z8Z70QYFZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);