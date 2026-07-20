import stations from "../data/stations";

function DashboardCards() {

  const total = stations.length;

  const openNow = stations.filter(
    station => station.open === "24 Hours"
  ).length;

  const limitedHours = stations.length - openNow;

  return (

    <div className="dashboard-cards">

      <div className="stat-card">
        <h3>Total Stations</h3>
        <h1>{total}</h1>
      </div>

      <div className="stat-card">
        <h3>Open 24 Hours</h3>
        <h1>{openNow}</h1>
      </div>

      <div className="stat-card">
        <h3>Limited Hours</h3>
        <h1>{limitedHours}</h1>
      </div>

    </div>

  );

}

export default DashboardCards;