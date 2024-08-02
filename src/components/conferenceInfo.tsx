// import React from 'react';
import focusIcon from '../assets/focus-icon.png';
import targetIcon from '../assets/target-icon.png';
import papersIcon from '../assets/papers-icon.png';
import './styles/conferenceInfo.css';

const ConferenceInfo = () => {
  return (
    <div className="conference-info-container">
      <h1>Conference Info</h1>
      <div className="info-cards">
        <div className="info-card">
          <img src={focusIcon} alt="Focus" className="info-icon" />
          <p>This conference mainly focuses on topics in</p>
          <ul>
            <li>Control</li>
            <li>Communication</li>
            <li>Computing</li>
          </ul>
        </div>
        <div className="info-card">
          <img src={targetIcon} alt="Objectives" className="info-icon" />
          <p>The objectives of the conference are to provide high quality research and professional interactions for the advancement of science, technology, and fellowship.</p>
        </div>
        <div className="info-card">
          <img src={papersIcon} alt="Call for Papers" className="info-icon" />
          <p><strong>Call for Paper Presentation!</strong> Papers with novel and quality work are encouraged for submission.</p>
        </div>
      </div>
    </div>
  );
}

export default ConferenceInfo;
