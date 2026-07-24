import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { subscribeStations } from "../services/stationService";
import "../styles/dashboard.css";

function Map() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const current = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setUserLocation(current);
      },
      () => {
        setLocationError(
          "Location permission denied. Please enable location."
        );
        setLoading(false);
      }
    );
  };
  useEffect(() => {
  if (!userLocation) return;

  const unsubscribe = subscribeStations((data) => {
    const updatedStations = data.map((station) => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        Number(station.lat),
        Number(station.lng)
      );

      return {
        ...station,
        distance,
      };
    });

    updatedStations.sort((a, b) => a.distance - b.distance);

    setStations(updatedStations);
    setLoading(false);
  });

  return () => unsubscribe();
}, [userLocation]);

  

  const calculateDistance = (
    lat1,
    lon1,
    lat2,
    lon2
  ) => {
    const R = 6371;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    return R * c;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1 className="title">
          📍 Nearby Fuel Stations
        </h1>

        {locationError && (
          <div
            style={{
              background: "#fee2e2",
              color: "#b91c1c",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            {locationError}
          </div>
        )}

        {userLocation && (
          <div
            style={{
              background: "#dbeafe",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "25px",
            }}
          >
            <strong>Your Location</strong>

            <br />

            Latitude: {userLocation.lat.toFixed(5)}

            <br />

            Longitude: {userLocation.lng.toFixed(5)}
          </div>
        )}

        <div className="station-list">

                    {stations.length === 0 ? (
            <h2>No Stations Found</h2>
          ) : (
            stations.map((station, index) => (
              <div
                key={station.id}
                className="station-card"
              >
                <div className="station-top">
                 <div>
  <h2>{station.name}</h2>

  <p>📍 {station.address}</p>

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
  🕒 <strong>Last Updated:</strong>{" "}
  {station.lastUpdated || "Not Available"}
</p>
</div>

                  {index === 0 && (
                    <span
                      style={{
                        background: "#16a34a",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      ⭐ Nearest
                    </span>
                  )}
                </div>

                <p>📞 {station.contact}</p>

                <p>🕒 {station.open}</p>

                <div className="fuel-row">

                  <span
                    className={
                      station.petrol
                        ? "fuel yes"
                        : "fuel no"
                    }
                  >
                    ⛽ Petrol
                  </span>

                  <span
                    className={
                      station.diesel
                        ? "fuel yes"
                        : "fuel no"
                    }
                  >
                    🚛 Diesel
                  </span>

                  <span
                    className={
                      station.cng
                        ? "fuel yes"
                        : "fuel no"
                    }
                  >
                    🔥 CNG
                  </span>

                </div>

                <hr />

                <p>
                  📍 Distance:
                  <strong>
                    {" "}
                    {station.distance.toFixed(2)} km
                  </strong>
                </p>

                <p>
                  🚗 Estimated Drive:
                  <strong>
                    {" "}
                    {Math.ceil(station.distance * 2)} mins
                  </strong>
                </p>

               <a
  href={`https://www.google.com/maps/search/?api=1&query=${station.lat},${station.lng}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="details-btn">
    🗺 Open in Google Maps
  </button>
</a>

              </div>
            ))
          )}
        </div>

      </div>

      <Footer />

    </>
  );
}

export default Map;