import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_LOMcUMzyJfJr5U_j-5T1YW2GJmHydjg",
  authDomain: "todoapp-e04ef.firebaseapp.com",
  projectId: "todoapp-e04ef",
  storageBucket: "todoapp-e04ef.appspot.com",
  messagingSenderId: "959850383542",
  appId: "1:959850383542:web:8876cd24c3fa2382567e17",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
};
