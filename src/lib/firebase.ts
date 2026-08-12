import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhTp54_K6oybsFKqsHusJgdpNkO7kB734",
  authDomain: "templ-98a98.firebaseapp.com",
  projectId: "templ-98a98",
  storageBucket: "templ-98a98.firebasestorage.app",
  messagingSenderId: "960043315335",
  appId: "1:960043315335:web:fae932fbd02521f4a94822",
  measurementId: "G-R2694RR3SL"
};

// Initialize Firebase (singleton pattern for Next.js SSR / client hydration)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
