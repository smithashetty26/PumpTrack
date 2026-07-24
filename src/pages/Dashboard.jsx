import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import StationCard from "../components/StationCard";
import Footer from "../components/Footer";
import { subscribeStations } from "../services/stationService";
import { calculateDistance } from "../utils/distance";
import "../styles/dashboard.css";

function Dashboard() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [petrolFilter, setPetrolFilter] = useState(false);
  const [dieselFilter, setDieselFilter] = useState(false);
  const [cngFilter, setCngFilter] = useState(false);

  const [sortOrder, setSortOrder] = useState("nearest");

  const [userLocation, setUserLocation] = useState(null);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLoading(false);
      }
    );
  } else {
    setLoading(false);
  }
}, []);


  useEffect(() => {
  if (!userLocation) return;

  const unsubscribe = subscribeStations((data) => {
    const updatedStations = data.map((station) => ({
      ...station,
      distance: calculateDistance(
        userLocation.lat,
        userLocation.lng,
        Number(station.lat),
        Number(station.lng)
      ),
    }));

    setStations(updatedStations);
    setLoading(false);
  });

  return () => unsubscribe();
}, [userLocation]);

  let filteredStations = stations.filter((station) => {
    const text = search.toLowerCase();

   const matchesSearch =
  String(station.name || "")
    .toLowerCase()
    .includes(text) ||

  String(station.address || "")
    .toLowerCase()
    .includes(text) ||

  String(station.contact || "")
    .toLowerCase()
    .includes(text);

    return (
      matchesSearch &&
      (!petrolFilter || station.petrol) &&
      (!dieselFilter || station.diesel) &&
      (!cngFilter || station.cng)
    );
  });

  filteredStations.sort((a, b) => {
    if (sortOrder === "nearest") {
      return (a.distance || 9999) - (b.distance || 9999);
    }

    if (sortOrder === "az") {
      return a.name.localeCompare(b.name);
    }

    return b.name.localeCompare(a.name);
  });

  if (loading) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "120px" }}>
          Loading Stations...
        </h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1 className="title">⛽ Fuel Stations Network</h1>

        <DashboardCards stations={stations} />

        <SearchBar search={search} setSearch={setSearch} />

        <br />

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <label>
            <input
              type="checkbox"
              checked={petrolFilter}
              onChange={(e) => setPetrolFilter(e.target.checked)}
            />
            Petrol
          </label>

          <label>
            <input
              type="checkbox"
              checked={dieselFilter}
              onChange={(e) => setDieselFilter(e.target.checked)}
            />
            Diesel
          </label>

          <label>
            <input
              type="checkbox"
              checked={cngFilter}
              onChange={(e) => setCngFilter(e.target.checked)}
            />
            CNG
          </label>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="nearest">Nearest First</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
        </div>

        {filteredStations.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>
            No Fuel Stations Found
          </h2>
        ) : (
          <div className="station-list">
          {filteredStations.map((station, index) => (
  <StationCard
    key={station.id}
    station={station}
    index={index}
  />
))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;