import React from 'react';
import './styles/KeynoteSpeakers.css';
import comingSoon from '../assets/comingSoon.jpg';
// Dummy data for keynote speakers
const speakers = [
  {
    name: "To be announced",
    title: "To be announced",
    topic: "To be announced",
    image: comingSoon
  },
  {
    name: "To be announced",
    title: "To be announced",
    topic: "To be announced",
    image: comingSoon
  },
  // {
  //   name: "To be announced",
  //   title: "To be announced",
  //   topic: "To be announced",
  //   image: comingSoon
  // }
];

const KeynoteSpeakers: React.FC = () => {
  return (
    <div className="keynote-speakers-container">
      <h1>Keynote Speakers</h1>
      <p className="intro-text">We are honored to present our distinguished keynote speakers for ICCC 2025. These industry leaders and academic experts will share their insights on cutting-edge topics in control, communication, and computing.</p>
      
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="speaker-image">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speaker-info">
              <h2>{speaker.name}</h2>
              <h3>{speaker.title}</h3>
              <p>{speaker.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeynoteSpeakers;