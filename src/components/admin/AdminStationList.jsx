function AdminStationList({
  stations,
  handleEdit,
  handleDelete,
}) {
  return (
    <>
      <h2>📋 All Stations</h2>

      <h3>Total Stations: {stations.length}</h3>

      {stations.length === 0 ? (
        <div className="station-card">
          <h3>No Stations Available</h3>
        </div>
      ) : (
        stations.map((item) => (
          <div
            key={item.id}
            className="station-card"
          >
            <div className="station-top">
              <div>
                <h2>{item.name}</h2>
                <p>📍 {item.address}</p>
              </div>

              <span className="open-badge">
                {item.open}
              </span>
            </div>

            <p>📞 {item.contact}</p>

            <div className="fuel-row">
              <span className={item.petrol ? "fuel yes" : "fuel no"}>
                ⛽ Petrol
              </span>

              <span className={item.diesel ? "fuel yes" : "fuel no"}>
                🚛 Diesel
              </span>

              <span className={item.cng ? "fuel yes" : "fuel no"}>
                🔥 CNG
              </span>
            </div>

            <button
              className="details-btn"
              onClick={() => handleEdit(item)}
            >
              ✏️ Edit
            </button>

            <button
              className="delete-btn"
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(item.id)}
            >
              🗑 Delete
            </button>
          </div>
        ))
      )}
    </>
  );
}

export default AdminStationList;