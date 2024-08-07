// import React from 'react';
import logo from '../assets/cetLogo.svg'; // Make sure the path to the logo is correct
import './styles/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar" onClick={toggleClass}>
      <div className="logo">
        {/* <h3>ICCC</h3> */}
        <img src={logo} alt="Conference Logo" />
        <h3> College of Engineering Trivandrum </h3>
      </div>
      <div
        className={isActive ? "nav-links nav-links-mobile" : "nav-links"}>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="nav-link">
          <Link to="/committee/organizing">Committee</Link>
          <div className="dropdown">
            <div>
              <Link to="/committee/organizing">Organizing Committee</Link>
            </div>
            <div>
              <Link to="/committee/organizing">Advisory Committee</Link>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/authors/submission-guidelines">Authors</Link>
          <div className="dropdown">
            <div>
              <Link to="/authors/submission-guidelines">Paper Submission Guidelines</Link>
            </div>
            <div>
              <a href="#">Camera Ready Paper Submission</a>
            </div>
            <div>
              <Link to="/authors/presentation-guidelines">Presentation Guidelines</Link>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/registration">Registration</Link>
        </div>
        <div className="nav-link">
          <a href="#">Event Details</a>
        </div>
        <div className="nav-link">
          <Link to="/tracks">Tracks</Link>
        </div>
        <div className="nav-link">
          <Link to="/speakers">Speakers</Link>
        </div>
        <div className="nav-link">
          <Link to="/Venue">Venue</Link>
          <div className="dropdown">
            <div>
              <a href="#">Conference Venue</a>
            </div>
            <div>
              <a href="#">Accomodation</a>
            </div>
            <div>
              <a href="#">How to Reach</a>
            </div>
            <div>
              <a href="#">Tourism</a>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;