import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>PumpTrack</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/map">Map</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/admin">Admin</Link>

      </div>

    </nav>
  );
}

export default Navbar;