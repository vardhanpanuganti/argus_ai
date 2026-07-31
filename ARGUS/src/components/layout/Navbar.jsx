import "./Navbar.css";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <ul>

          <li onClick={closeMenu}>Explore</li>

          <li onClick={closeMenu}>AI Planner</li>

          <li onClick={closeMenu}>Bookings</li>

          <li onClick={closeMenu}>Discover</li>

        </ul>

        <div className="mobile-footer">

          <div className="footer-line"></div>

          <p>ARGUS AI</p>

          <span>Experience Before You Decide</span>

        </div>

      </div>
    </>
  );
}