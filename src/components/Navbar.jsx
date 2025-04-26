import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you create a Navbar.css for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Student Management System</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/students" className="nav-link">Show Students</Link>
        <Link to="/add" className="nav-link">Add Student</Link>
      </div>
    </nav>
  );
};

export default Navbar;
