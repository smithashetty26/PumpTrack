import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Get stations once
export const getStations = async () => {
  const snapshot = await getDocs(collection(db, "stations"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Listen for real-time updates
export const subscribeStations = (callback) => {
  return onSnapshot(collection(db, "stations"), (snapshot) => {
    const stations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(stations);
  });
};