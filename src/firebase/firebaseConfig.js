import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf7Vrx1Z3VDiMB66U3A7n5kc4OzCRF4t4",
  authDomain: "pumptrack-a1688.firebaseapp.com",
  projectId: "pumptrack-a1688",
  storageBucket: "pumptrack-a1688.firebasestorage.app",
  messagingSenderId: "98235525456",
  appId: "1:98235525456:web:0d75b682327ddbff43e455"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;