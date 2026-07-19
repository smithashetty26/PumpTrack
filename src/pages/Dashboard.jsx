import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";
import stations from "../data/stations";

function Dashboard() {

  const [search, setSearch] = useState("");


  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Fuel Availability</h1>

        <input
          type="text"
          className="search"
          placeholder="Search Fuel Station..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredStations.length > 0 ? (
          filteredStations.map((station) => (
            <div className="card" key={station.id}>

              <h2>{station.name}</h2>

              <p>⛽ Petrol : {station.petrol ? "Available" : "Not Available"}</p>

              <p>🚛 Diesel : {station.diesel ? "Available" : "Not Available"}</p>

              <p>🔥 CNG : {station.cng ? "Available" : "Not Available"}</p>

             <Link to={`/station/${station.id}`}>
             <button>View Details</button>
             </Link>

            </div>
          ))
        ) : (
          <h3>No Fuel Station Found</h3>
        )}

      </div>
    </>
  );
}

export default Dashboard;