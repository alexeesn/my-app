import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Pawfect Homes
        </NavLink>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pets"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={closeMenu}
            >
              Pets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adopt"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={closeMenu}
            >
              Adopt
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={closeMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
