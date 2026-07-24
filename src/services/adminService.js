import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const stationCollection = collection(db, "stations");

// Add Station
export const addStation = async (station) => {
  return await addDoc(stationCollection, {
    ...station,
    lastUpdated: new Date().toLocaleString(),
  });
};

// Get All Stations
export const getStations = async () => {
  const snapshot = await getDocs(stationCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Delete Station
export const deleteStation = async (id) => {
  await deleteDoc(doc(db, "stations", id));
};

// Update Station
export const updateStation = async (id, station) => {
  await updateDoc(doc(db, "stations", id), {
    ...station,
    lastUpdated: new Date().toLocaleString(),
  });
};