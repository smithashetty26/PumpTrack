import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import stations from "../data/stations";
import "../styles/dashboard.css";
import Card from "../components/Card";

function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1 className="title">⛽ Fuel Stations Network</h1>

        <DashboardCards />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="station-list">

          {filteredStations.length > 0 ? (
            filteredStations.map((station) => (
              <div key={station.id}>

  <Card station={station} />

  <Link to={`/station/${station.id}`}>
    <button className="details-btn">
      View Details
    </button>
  </Link>

</div>
            ))
          ) : (
            <h2>No Fuel Station Found</h2>
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;