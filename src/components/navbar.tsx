// import React from 'react';
// import logo from '../assets/cetLogo.svg'; // Make sure the path to the logo is correct
import logo from '../assets/image.png'
import './styles/navbar.css';
// import './styles/navbar_hisham.css';
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
        <img src={logo} alt="CET Emblem" />
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
          <div className="dropdown dropdown-menu-1">
            <div className='dropdown-item-1'>
            <Link to="/committee/organizing">Organizing Committee</Link>
            </div>
            <div className='dropdown-item-2'>
              <a href="#">Advisory Committee</a>
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
              <Link to="/authors/cameraready-guidelines">Camera Ready Paper Submission</Link>
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
          <a href="/eventdetails">Event Details</a>
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
              <Link to="/aboutus">Conference Venue</Link>
            </div>
            <div>
              <a href="#">Accomodation</a>
            </div>
            <div>
              <a href="#">How to Reach</a>
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