import { Link } from "react-router-dom";

function StationCard({ station, index }) {
  return (
    <div className="station-card">

      <div className="station-top">

        <div>

          <h2>{station.name}</h2>

          <p>📍 {station.address}</p>

          {/* Status */}

          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "20px",
                backgroundColor:
                  station.status === "Open"
                    ? "#dcfce7"
                    : "#fee2e2",
                color:
                  station.status === "Open"
                    ? "#15803d"
                    : "#dc2626",
                fontWeight: "bold",
              }}
            >
              {station.status === "Open"
                ? "🟢 OPEN"
                : "🔴 CLOSED"}
            </span>
          </p>

          {/* Queue */}

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

          {/* Last Updated */}

          {station.lastUpdated && (
            <p
              style={{
                fontSize: "13px",
                color: "#666",
                marginTop: "8px",
              }}
            >
              🕒 Updated: {station.lastUpdated}
            </p>
          )}

          {/* Nearest Badge */}

          {index === 0 && (
            <span
              style={{
                background: "#16a34a",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "bold",
                display: "inline-block",
                marginTop: "8px",
              }}
            >
              ⭐ Nearest
            </span>
          )}

          {/* Distance */}

          {station.distance && (
            <p
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              📍 Distance: {station.distance} km
            </p>
          )}

        </div>

        <span className="open-badge">
          🕒 {station.open}
        </span>

      </div>

      {/* Fuel Availability */}

      <div className="fuel-row">

        <span className={station.petrol ? "fuel yes" : "fuel no"}>
          {station.petrol ? "🟢 Petrol" : "🔴 Petrol"}
        </span>

        <span className={station.diesel ? "fuel yes" : "fuel no"}>
          {station.diesel ? "🟢 Diesel" : "🔴 Diesel"}
        </span>

        <span className={station.cng ? "fuel yes" : "fuel no"}>
          {station.cng ? "🟢 CNG" : "🔴 CNG"}
        </span>

      </div>

      {/* Contact */}

      <p>
        <strong>📞 Contact:</strong> {station.contact}
      </p>

      {/* View Details */}

      <Link to={`/station/${station.id}`}>
        <button className="details-btn">
          View Details →
        </button>
      </Link>

    </div>
  );
}

export default StationCard;