import logo from '../assets/logo_scrshot_white_alphabg.png';
import ieeelogo from '../assets/logo-ieee-white-transparent.webp';
import './styles/navbar_hisham.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">
          <img className="ieee-logo" src={ieeelogo} alt="IEEE logo" />
          <img src={logo} alt="CET Emblem" />
          <h3>College of Engineering Trivandrum</h3>
        </div>
      </Link>
      <div className="menu-button">
        <button onClick={toggleClass}>Menu</button>
      </div>
      <div className={`nav-links ${isActive ? "nav-links-mobile" : ""}`}>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="nav-link">
          <a href="#">Committee</a>
          <div className="dropdown">
            <div className='dropdown-item'>
              <Link to="/committee/organizing">Organizing Committee</Link>
            </div>
            <div className='dropdown-item'>
              <Link to="/committee/advisorycommittee">Advisory Committee</Link>
            </div>
            <div className='dropdown-item'>
              <Link to="/committee/steeringcommittee">Steering Committee</Link>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <a href="#">Authors</a>
          <div className="dropdown">
            <div>
              <Link to="/authors/submission-guidelines">Paper Submission Guidelines</Link>
            </div>
            {/* <div>
              <Link to="/authors/presentation-guidelines">Presentation Guidelines</Link>
            </div> */}
            <div>
              <Link to="/authors/cameraready-guidelines">Camera Ready Guidelines</Link>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/registration">Registration</Link>
        </div>
        <div className="nav-link">
          <a href="#">Call for Papers</a>
          <div className="dropdown">
            <div className='dropdown-item'>
              <Link to="/tracks">Tracks</Link>
            </div>
            <div className='dropdown-item'>
              <HashLink smooth to="/#timeline">Important Dates</HashLink>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/speakers">Speakers</Link>
        </div>
        <div className="nav-link">
          <a href="#">Venue</a>
          <div className="dropdown">
            <div>
              <Link to="/conferencevenue">Conference Venue</Link>
            </div>
            <div>
              <HashLink smooth to="/venue/howtoreach#top">How to Reach</HashLink>
            </div>
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
