// import React from 'react';
// import logo from '../assets/cetLogo.svg'; // Make sure the path to the logo is correct
// import logo from '../assets/image.png'
// import './styles/navbar.css';
import React, { useState } from 'react';
import logo from '../assets/logo_scrshot_white_alphabg.png';
import './styles/navbar_hisham.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar" onClick={toggleClass}>
      <Link to="/" style={{"textDecoration":"none"}}>
        <div className="logo">
          {/* <h3>ICCC</h3> */}
          <img src={logo} alt="CET Emblem" />
          <h3> College of Engineering Trivandrum </h3>
        </div>
      </Link>
      <div className="menu-button"><button onClick={toggleClass}>Menu</button></div>
      <div
        className={isActive ? "nav-links nav-links-mobile" : "nav-links"}>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="nav-link">
          {/* <Link to="/committee/organizing">Committee</Link> */}
          <a>Committee</a>
          <div className="dropdown dropdown-menu-1">
            <div className='dropdown-item-1'>
              <Link to="/committee/organizing">Organizing Committee</Link>
            </div>
            <div className='dropdown-item-2'>
              <Link to="/committee/advisorycommittee">Advisory Committee</Link>
            </div>
            <div className='dropdown-item-3'>
              <Link to="/committee/steeringcommittee">Steering Committee</Link>
            </div>
          </div>
        </div>
        <div className="nav-link">
          {/* <Link to="/authors/submission-guidelines">Authors</Link> */}
          <a>Authors</a>
          <div className="dropdown">
            <div>
              <Link to="/authors/submission-guidelines">Paper Submission Guidelines</Link>
            </div>
            {/* <div>
              <Link to="/authors/cameraready-guidelines">Camera Ready Paper Submission</Link>
            </div> */}
            {/* <div>
              <Link to="/authors/presentation-guidelines">Presentation Guidelines</Link>
            </div> */}
          </div>
        </div>
        <div className="nav-link">
          <Link to="/registration">Registration</Link>
        </div>
        {/* <div className="nav-link">
          <a href="/eventdetails">Event Details</a>
          <div className="dropdown">
            <div>
              <Link to="/keynote">Keynotes</Link>
            </div>
            <div>
              <Link to="/tutorials" >Tutorials</Link>
            </div>
            <div>
              <Link to="/eventschedule">Event Schedule</Link>
            </div>
          </div>
        </div> */}
        <div className="nav-link">
          {/* <Link to="/tracks">Call for Papers</Link> */}
          <a>Call for Papers</a>
          <div className="dropdown dropdown-menu-1">
            <div className='dropdown-item-1'>
              <Link to="/tracks">Tracks</Link>
            </div>
            <div className='dropdown-item-2'>
              {/* <Link to="/imp-dates">Important Dates</Link> */}
              <HashLink smooth to="/#timeline">Important Dates</HashLink>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/speakers">Speakers</Link>
        </div>
        <div className="nav-link">
          {/* <Link to="/Venue">Venue</Link> */}
          <a>Venue</a>
          <div className="dropdown">
            <div>
              <Link to="/conferencevenue">Conference Venue</Link>
            </div>
            <div>
              <HashLink smooth to="/venue/howtoreach#top">How to Reach</HashLink>
            </div>
            {/* <div>
              <Link to="/accommodation">Accommodation</Link>
            </div> */}
            <div>
              <Link to="/venue/tourism">Local Attractions</Link>
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