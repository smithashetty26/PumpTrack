import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import "../styles/navbar.css";

function Navbar() {
  const location = useLocation();

  const user = auth.currentUser;

  return (
    <nav className="navbar">

      <div className="logo">
        ⛽ PumpTrack
      </div>

      <div className="nav-links">

        <Link
          className={
            location.pathname === "/dashboard"
              ? "active-link"
              : ""
          }
          to="/dashboard"
        >
          Dashboard
        </Link>

        <Link
          className={
            location.pathname === "/map"
              ? "active-link"
              : ""
          }
          to="/map"
        >
          Map
        </Link>

        <Link
          className={
            location.pathname === "/profile"
              ? "active-link"
              : ""
          }
          to="/profile"
        >
          Profile
        </Link>

        <Link
          className={
            location.pathname === "/admin"
              ? "active-link"
              : ""
          }
          to="/admin"
        >
          Admin
        </Link>

      </div>

      <div className="nav-user">
        👋 {user?.email?.split("@")[0]}
      </div>

    </nav>
  );
}

export default Navbar;