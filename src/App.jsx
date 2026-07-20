import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Admin from "./pages/Admin";
import StationDetails from "./pages/StationDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/map" element={<Map />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/station/:id" element={<StationDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;