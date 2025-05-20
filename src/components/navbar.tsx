import logo from "../assets/logo_scrshot_white_alphabg.png";
import ieeelogo from "../assets/logo-ieee-white-transparent.webp";
import "./styles/navbar_hisham.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [scheduleView, setScheduleView] = useState("main"); // "main" or "track"

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
            <div className="dropdown-item">
              <Link to="/committee/organizing">Organizing Committee</Link>
            </div>
            <div className="dropdown-item">
              <Link to="/committee/advisorycommittee">Advisory Committee</Link>
            </div>
            <div className="dropdown-item">
              <Link to="/committee/steeringcommittee">Steering Committee</Link>
            </div>
          </div>
        </div>
        {/* <div className="nav-link">
          <a href="#">Authors</a>
          <div className="dropdown">
            <div>
              <Link to="/authors/submission-guidelines">
                Paper Submission Guidelines
              </Link>
            </div>
            <div>
              <Link to="/authors/cameraready-guidelines">
                Camera Ready Guidelines
              </Link>
              <span
                style={{
                  backgroundColor: "red",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "2px 6px",
                  margin: "0 5px",
                  borderRadius: "4px",
                  height: "30%",
                  verticalAlign: "middle",
                }}
              >
                NEW
              </span>
            </div>
          </div>
        </div> */}
        <div className="nav-link">
          <button
            className="dropdown-toggle"
            onClick={() => setScheduleView("main")}
          >
            Schedule
          </button>
          <div className="dropdown">
            {scheduleView === "main" && (
              <>
                <div className="dropdown-item">
                  <Link to="/schedule/inaugural">Inaugural Schedule</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/schedule/program">Program Schedule</Link>
                </div>
                <div className="dropdown-item">
                  <button
                    className="nested-toggle"
                    onClick={(e) => {
                      e.stopPropagation(); // 🛑 Prevents closing due to bubbling
                      setScheduleView("track");
                    }}
                  >
                    Track Schedule
                  </button>
                </div>
              </>
            )}

            {scheduleView === "track" && (
              <>
                <div className="dropdown-item">
                  <button
                    className="back-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setScheduleView("main");
                    }}
                  >
                    ← Back
                  </button>
                </div>
                <div className="dropdown-item">
                  <a
                    href="https://docs.google.com/document/d/1wa1QsETsDaHDLKGvJOw8_7CqVSxdsmUo/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Track 1
                  </a>
                </div>
                <div className="dropdown-item">
                  <a
                    href="https://docs.google.com/document/d/1PYsXa02h0mtlMWeB6urZYo45-rB-snwk/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Track 2
                  </a>
                </div>
                <div className="dropdown-item">
                  <a
                    href="https://docs.google.com/document/d/1aSdtvuhelCqF6l-rBePH3xMXCCIsI6Z7/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Track 3
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="nav-link">
          <Link to="/registration">Registration</Link>
        </div>
        <div className="nav-link">
          <a href="#">Call for Papers</a>
          <div className="dropdown">
            <div className="dropdown-item">
              <Link to="/tracks">Tracks</Link>
            </div>
            <div className="dropdown-item">
              <HashLink smooth to="/#timeline">
                Important Dates
              </HashLink>
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
              <HashLink smooth to="/venue/howtoreach#top">
                How to Reach
              </HashLink>
            </div>
            <div>
              <Link to="/venue/tourism">Local Attractions</Link>
            </div>
            <div>
              <Link to="/venue/accommodation">Accommodation</Link>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
