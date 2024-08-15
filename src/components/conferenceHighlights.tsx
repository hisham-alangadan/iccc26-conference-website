// import React from 'react';
// import focusIcon from '../assets/focus-icon.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import focusIcon from '../assets/keynotespeakersTxt.png';
// import targetIcon from '../assets/target-icon.png';
import targetIcon from '../assets/tutorialsTxt.png';
// import papersIcon from '../assets/papers-icon.png';
import papersIcon from '../assets/papers-icon-2.png';
import './styles/conferenceInfo.css';

const ConferenceHighlights = () => {
  return (
    <div className="conference-info-container">
      <h1>Conference Highlights</h1>
      <div className="info-cards">
        <div className="info-card">
          <img src={focusIcon} alt="Focus" className="info-icon" />
          <h2>Keynote Speakers</h2>
          <ul>
            <HashLink smooth to="/speakers#speaker0">
              <li>Dr. Tessy Thomas</li>
            </HashLink>
            <HashLink smooth to="/speakers#speaker1">
              <li>Saji S</li>
            </HashLink>
          </ul>
        </div>
        <Link to="/tutorials">
        <div className="info-card">
          <img src={targetIcon} alt="Objectives" className="info-icon" />
          {/* <div className='tutorials'>Tutorials</div> */}
          <h2>Tutorials</h2>
          <ul>
            <li>Tutorial 1</li>
            <li>Tutorial 2</li>
            <li>Tutorial 3</li>
          </ul>
          {/* <p>The objectives of the conference are to provide high quality research and professional interactions for the advancement of science, technology, and fellowship.</p> */}
        </div>
        </Link>
        <HashLink smooth to="/tracks#top">
          <div className="info-card">
            <img src={papersIcon} alt="Call for Papers" className="info-icon" />
            {/* <p><strong>Call for papers</strong> Papers with novel and quality work are encouraged for submission.</p> */}
            <h2>Technical Tracks</h2>
          </div>
        </HashLink>
      </div>
    </div>
  );
}

export default ConferenceHighlights;
