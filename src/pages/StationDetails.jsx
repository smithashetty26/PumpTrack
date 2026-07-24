import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getStations } from "../services/stationService";
import "../styles/dashboard.css";

function StationDetails() {

  const { id } = useParams();

  const [station, setStation] = useState(null);

  useEffect(() => {
    loadStation();
  }, []);

  const loadStation = async () => {

    const stations = await getStations();

    const found = stations.find((s) => s.id === id);

    setStation(found);

  };

  if (!station) {
    return (
      <>
        <Navbar />

        <h2
          style={{
            textAlign: "center",
            marginTop: "100px"
          }}
        >
          Loading Station...
        </h2>

      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="station-card">

          <h1>{station.name}</h1>

          <hr />

          <p><strong>📍 Address:</strong> {station.address}</p>

          <p><strong>📞 Contact:</strong> {station.contact}</p>

          <p><strong>🕒 Timings:</strong> {station.open}</p>
          <p>
  <strong>Status:</strong>{" "}
  <span
    style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "20px",
      backgroundColor:
        station.status === "Open" ? "#dcfce7" : "#fee2e2",
      color:
        station.status === "Open" ? "#15803d" : "#dc2626",
      fontWeight: "bold",
    }}
  >
    {station.status === "Open" ? "🟢 OPEN" : "🔴 CLOSED"}
  </span>
</p>

<p>
  <strong>Queue:</strong>{" "}
  <span
    style={{
      display: "inline-block",
      padding: "4px 12px",
      borderRadius: "20px",
      fontWeight: "bold",
      backgroundColor:
        station.queue === "Low"
          ? "#dcfce7"
          : station.queue === "Medium"
          ? "#fef3c7"
          : "#fee2e2",
      color:
        station.queue === "Low"
          ? "#15803d"
          : station.queue === "Medium"
          ? "#b45309"
          : "#dc2626",
    }}
  >
    {station.queue === "Low"
      ? "🟢 LOW"
      : station.queue === "Medium"
      ? "🟡 MEDIUM"
      : "🔴 HIGH"}
  </span>
</p>
<p>
  <strong>🕒 Last Updated:</strong>{" "}
  {station.lastUpdated || "Not Available"}
</p>

          <h3>Fuel Availability</h3>

          <p>
            {station.petrol ? "🟢 Petrol Available" : "🔴 Petrol Not Available"}
          </p>

          <p>
            {station.diesel ? "🟢 Diesel Available" : "🔴 Diesel Not Available"}
          </p>

          <p>
            {station.cng ? "🟢 CNG Available" : "🔴 CNG Not Available"}
          </p>

          <br />

          <a
  href={`https://www.google.com/maps/search/?api=1&query=${station.lat},${station.lng}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="details-btn">
    🗺 Open in Google Maps
  </button>
</a>

          <Link to="/dashboard">
            <button
              className="details-btn"
              style={{ marginLeft: "10px" }}
            >
              ← Back
            </button>
          </Link>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default StationDetails;