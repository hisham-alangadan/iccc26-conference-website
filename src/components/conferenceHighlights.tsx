// import React from 'react';
// import focusIcon from '../assets/focus-icon.png';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import focusIcon from '../assets/keynotespeakersTxt.png';
// import targetIcon from '../assets/target-icon.png';
// import targetIcon from '../assets/tutorialsTxt.png';
// import papersIcon from '../assets/papers-icon.png';
// import papersIcon from '../assets/papers-icon-2.png';
import './styles/conferenceInfo.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import DrTessy from '../assets/DrTessy.png';
import DrSaji from '../assets/DrSaji.png';



const ConferenceHighlights = () => {
  return (
    <div className="conference-info-container">
      <h1>Conference Highlights</h1>
      <div className="info-cards">
        {/* <div className="info-card">
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
          <h2>Tutorials</h2>
          <ul>
            <li>Tutorial 1</li>
            <li>Tutorial 2</li>
            <li>Tutorial 3</li>
          </ul>
        </div>
        </Link>
        <HashLink smooth to="/tracks#top">
          <div className="info-card">
            <img src={papersIcon} alt="Call for Papers" className="info-icon" />
            <h2>Technical Tracks</h2>
          </div>
        </HashLink> */}
        <Carousel showThumbs={false}>
                <div>
                  <div>
                    <h1>Keynote Speakers</h1>
                    <div className="carousel-speaker-card">
                      <img src={DrTessy} className='carousel-img'/>
                      <p>information abot person</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h1>Keynote Speakers</h1>
                    <div className="carousel-speaker-card">
                      <img src={DrSaji} className='carousel-img'/>
                      <p>information abot person</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>Techinical Tracks at ICCC 2025</h1>
                </div>
            </Carousel>
      </div>
    </div>
  );
}

export default ConferenceHighlights;
