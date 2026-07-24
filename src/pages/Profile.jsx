import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) return null;

  const role =
    user.email?.toLowerCase() === "shetty456@gmail.com"
      ? "Administrator"
      : "User";

  const name =
    user.displayName ||
    user.email.split("@")[0];

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="profile-card">

          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <h2>{name}</h2>

          <p className="email">
            {user.email}
          </p>

          <span className="role-badge">
            {role}
          </span>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;