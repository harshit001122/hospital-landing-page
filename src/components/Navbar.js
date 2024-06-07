import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-medi">Medi</span><span className="logo-care">Care+</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/news" className="nav-link">News</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
