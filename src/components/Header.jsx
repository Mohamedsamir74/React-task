import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

export default function Header({ searchQuery, setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">MyStore</NavLink>
      </div>

      {/* زر القائمة للموبايل */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        {/* بوكس البحث */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>
      </nav>
    </header>
  );
}
