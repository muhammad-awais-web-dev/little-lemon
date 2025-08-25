import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
// import Logo from '.../public/SVG/logo-With-Text.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar">
        <img src={`${process.env.PUBLIC_URL}/SVG/logo-With-Text.svg`} alt="Little Lemon Logo" />

      {/* Burger Icon */}
      <div className={`burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul id="navMenu" className={isMenuOpen ? "active" : ""}>
        <Link to="/" className="navLink" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="navLink" onClick={closeMenu}>About Us</Link>
        <Link to="/menu" className="navLink" onClick={closeMenu}>Menu</Link>
        <Link to="/reservation" className="navLink" onClick={closeMenu}>Reservation</Link>
        <Link to="/orderOnline" className="navLink" onClick={closeMenu}>Order Online</Link>
        <Link to="/login" className="navLink" onClick={closeMenu}>Login</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
