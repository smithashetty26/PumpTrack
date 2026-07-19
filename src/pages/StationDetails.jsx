import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import stations from "../data/stations";

function StationDetails() {

  const { id } = useParams();

  const station = stations.find(
    (s) => s.id === Number(id)
  );

  if (!station) {
    return <h2>Station Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="card">

          <h1>{station.name}</h1>

          <hr />

          <p><strong>📍 Address:</strong> {station.address}</p>

          <p><strong>⛽ Petrol:</strong> {station.petrol ? "Available" : "Not Available"}</p>

          <p><strong>🚛 Diesel:</strong> {station.diesel ? "Available" : "Not Available"}</p>

          <p><strong>🔥 CNG:</strong> {station.cng ? "Available" : "Not Available"}</p>

          <p><strong>📞 Contact:</strong> {station.contact}</p>

          <p><strong>🕒 Open:</strong> {station.open}</p>

          <a
  href={station.mapLink}
  target="_blank"
  rel="noreferrer"
>
  <button>Open in Google Maps</button>
</a>

        </div>

      </div>

    </>
  );
}

export default StationDetails;