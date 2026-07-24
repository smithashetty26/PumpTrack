import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>⛽ PumpTrack</h1>

        <p>
          Find nearby fuel stations and check fuel availability in real time.
        </p>

        <div className="buttons">

          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button className="register">
              Register
            </button>
          </Link>

        </div>

      </div>

      <div className="features">

        <div className="feature">
          <h2>🔍 Smart Search</h2>
          <p>Search fuel stations instantly.</p>
        </div>

        <div className="feature">
          <h2>📍 Live Maps</h2>
          <p>Open stations directly in Google Maps.</p>
        </div>

        <div className="feature">
          <h2>⛽ Fuel Status</h2>
          <p>Petrol, Diesel and CNG availability.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;