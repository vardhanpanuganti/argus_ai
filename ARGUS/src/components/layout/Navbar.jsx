import "./Navbar.css";
import { FiSearch, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-dot"></div>
        <span>ARGUS</span>
      </div>

      <ul className="nav-links">
        <li>Explore</li>
        <li>AI Planner</li>
        <li>Bookings</li>
        <li>Discover</li>
      </ul>

      <div className="nav-icons">
        <FiSearch />
        <FiUser />
      </div>

    </nav>
  );
}