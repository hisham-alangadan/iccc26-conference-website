// import React from 'react';
import logo from '../assets/cetLogo.svg'; // Make sure the path to the logo is correct
import './styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <h3>ICCC</h3> */}
        <img src={logo} alt="Conference Logo" />
        <h3> College of Engineering Trivandrum </h3>
      </div>
      <div className="nav-links">
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="nav-link">
          <a href="#">Committee</a>
          <div className="dropdown">
            <div>
              <a href="#">Organizing Committee</a>
            </div>
            <div>
              <a href="#">Advisory Committee</a>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/authors/submission-guidelines">Authors</Link>
          <div className="dropdown">
            <div>
              <a href="#">Paper Submission Guidelines</a>
            </div>
            <div>
              <a href="#">Camera Ready Paper Submission</a>
            </div>
            <div>
              <a href="#">Presentation Guidelines</a>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <a href="#">Registration</a>
        </div>
        <div className="nav-link">
          <a href="#">Event Details</a>
        </div>
        <div className="nav-link">
          <Link to="/tracks">Tracks</Link>
        </div>
        <div className="nav-link">
          <a href="#">Speakers</a>
        </div>
        <div className="nav-link">
          <Link to="/Venue">Venue</Link>
          <div className="dropdown">
            <div>
              <a href="#">Accomodation</a>
            </div>
            <div>
              <a href="#">Conference Venue</a>
            </div>
            <div>
              <a href="#">How to Reach</a>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;