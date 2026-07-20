import { Link } from "react-router-dom";
import { FaGasPump, FaMapMarkedAlt, FaUser, FaUserShield } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ⛽ <span>PumpTrack</span>
      </div>

      <div className="nav-links">

        <Link to="/dashboard">
          <FaGasPump /> Dashboard
        </Link>

        <Link to="/map">
          <FaMapMarkedAlt /> Map
        </Link>

        <Link to="/profile">
          <FaUser /> Profile
        </Link>

        <Link to="/admin">
          <FaUserShield /> Admin
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;