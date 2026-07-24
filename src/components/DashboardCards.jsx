function DashboardCards({ stations }) {
  const total = stations.length;

  const openStations = stations.filter(
    (s) => s.status === "Open"
  ).length;

  const closedStations = stations.filter(
    (s) => s.status === "Closed"
  ).length;

  return (
    <div className="cards">

      <div className="card total-card">
        <div className="card-icon">🏢</div>

        <div>
          <h4>Total Stations</h4>
          <h1>{total}</h1>
        </div>
      </div>

      <div className="card open-card">
        <div className="card-icon">🟢</div>

        <div>
          <h4>Open Stations</h4>
          <h1>{openStations}</h1>
        </div>
      </div>

      <div className="card closed-card">
        <div className="card-icon">🔴</div>

        <div>
          <h4>Closed Stations</h4>
          <h1>{closedStations}</h1>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;