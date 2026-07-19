import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Admin() {

  const [stationName, setStationName] = useState("");
  const [address, setAddress] = useState("");

  const [stations, setStations] = useState([]);

  const addStation = () => {

    if(stationName==="" || address===""){
      alert("Fill all fields");
      return;
    }

    const newStation = {
      id: Date.now(),
      name: stationName,
      address: address
    };

    setStations([...stations,newStation]);

    setStationName("");
    setAddress("");

  };

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <h1>Admin Panel</h1>

        <div className="card">

          <input
            className="search"
            placeholder="Station Name"
            value={stationName}
            onChange={(e)=>setStationName(e.target.value)}
          />

          <input
            className="search"
            placeholder="Address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />

          <button onClick={addStation}>
            Add Station
          </button>

        </div>

        <h2>Stations</h2>

        {
          stations.map((station)=>(

            <div className="card" key={station.id}>

              <h3>{station.name}</h3>

              <p>{station.address}</p>

            </div>

          ))
        }

      </div>

    </>

  );

}

export default Admin;