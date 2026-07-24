import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AdminStats from "../components/admin/AdminStats";
import AdminCharts from "../components/admin/AdminCharts";
import ExportCSV from "../components/admin/ExportCSV";
import AdminForm from "../components/admin/AdminForm";
import AdminStationList from "../components/admin/AdminStationList";

import { auth } from "../firebase/firebaseConfig";

import {
  addStation,
  getStations,
  deleteStation,
  updateStation,
} from "../services/adminService";

import "../styles/dashboard.css";

function Admin() {
  const navigate = useNavigate();

 const emptyStation = {
  name: "",
  address: "",
  contact: "",
  open: "",
  petrol: false,
  diesel: false,
  cng: false,
  lat: "",
  lng: "",
  status: "Open",
  queue: "Low",
  lastUpdated: "",
};

  const [station, setStation] = useState(emptyStation);
  const [stations, setStations] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        toast.error("Please login first.");
        navigate("/login");
        return;
      }

      if (user.email?.toLowerCase() !== "shetty456@gmail.com") {
        toast.error("Access Denied! Admin Only.");
        navigate("/dashboard");
        return;
      }

      await loadStations();
    });

    return () => unsubscribe();
  }, []);

  const loadStations = async () => {
    try {
      const data = await getStations();
      setStations(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async () => {
    if (
      !station.name.trim() ||
      !station.address.trim() ||
      !station.contact.trim() ||
      !station.open.trim() ||
      station.lat === "" ||
      station.lng === ""
    ) {
      toast.warning("Please fill all fields.");
      return;
    }

    // Station Name
    if (!/^[A-Za-z][A-Za-z0-9\s.-]{2,49}$/.test(station.name.trim())) {
      toast.error("Enter a valid station name.");
      return;
    }

    // Address
    if (
      station.address.trim().length < 5 ||
      !station.address.includes(" ")
    ) {
      toast.error("Enter a valid address.");
      return;
    }

    // Contact
    if (!/^[0-9]{10}$/.test(station.contact)) {
      toast.error("Contact number must contain exactly 10 digits.");
      return;
    }

    // Opening Hours
    const hours = station.open.trim();

    const validHours =
      /^24\s*Hours$/i.test(hours) ||
      /^\d{1,2}\s?(AM|PM)\s*-\s*\d{1,2}\s?(AM|PM)$/i.test(hours);

    if (!validHours) {
      toast.error(
        "Enter timings like '24 Hours' or '6 AM - 10 PM'."
      );
      return;
    }

    // Latitude
    const latitude = Number(station.lat);

    if (
      isNaN(latitude) ||
      latitude < -90 ||
      latitude > 90
    ) {
      toast.error("Please enter a valid latitude.");
      return;
    }

    // Longitude
    const longitude = Number(station.lng);

    if (
      isNaN(longitude) ||
      longitude < -180 ||
      longitude > 180
    ) {
      toast.error("Please enter a valid longitude.");
      return;
    }
    const duplicate = stations.find(
  (s) =>
    s.name.trim().toLowerCase() ===
      station.name.trim().toLowerCase() &&
    s.id !== editingId
);

if (duplicate) {
  toast.error("Station already exists.");
  return;
}

    try {
      if (editingId) {
        await updateStation(editingId, station);
        toast.success("Station Updated Successfully");
      } else {
        await addStation(station);
        toast.success("Station Added Successfully");
      }

      setStation(emptyStation);
      setEditingId(null);

      loadStations();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (item) => {
    setStation(item);
    setEditingId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this station?")) return;

    try {
      await deleteStation(id);
      toast.success("Station Deleted");
      loadStations();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1 className="title">⚙️ Admin Dashboard</h1>

        <AdminStats stations={stations} />

        <AdminCharts stations={stations} />

        <ExportCSV stations={stations} />

        <AdminForm
          station={station}
          setStation={setStation}
          editingId={editingId}
          handleSubmit={handleSubmit}
          setEditingId={setEditingId}
          emptyStation={emptyStation}
        />

        <AdminStationList
          stations={stations}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      <Footer />
    </>
  );
}

export default Admin;