function Card({ station }) {
  return (
    <div className="station-card">

      <div className="station-header">
        <h2>{station.name}</h2>
        <span className="status">Open</span>
      </div>

      <p className="address">📍 {station.address}</p>

      <div className="fuel-status">

        <span className={station.petrol ? "available" : "notavailable"}>
          ⛽ Petrol
        </span>

        <span className={station.diesel ? "available" : "notavailable"}>
          🚛 Diesel
        </span>

        <span className={station.cng ? "available" : "notavailable"}>
          🔥 CNG
        </span>

      </div>

      <p>📞 {station.contact}</p>

      <p>🕒 {station.open}</p>

    </div>
  );
}

export default Card;