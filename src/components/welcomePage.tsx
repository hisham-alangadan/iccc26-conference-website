// import React from 'react';
import ieeeLogo from '../assets/ieee mb blue.png';
import conferenceLogo from '../assets/conference-logo.svg';
import './styles/welcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />
      </header>
      <div className="welcome-main">
        <main className="welcome-content">
          <h1>Welcome to ICCC 2025!</h1>
          <h2>The 6<sup>th</sup> International Conference on Control, Communication and Computing</h2>
          <p style={{ "textAlign": "justify", "lineHeight": "1.6" }}>
            <strong>ICCC 2025</strong> brings together researchers, practicing engineers, faculty, and students to explore the latest advancements in Control, Communication, and Computing. This biennial conference is jointly organized by the Departments of Electronics and Communication Engineering, Electrical Engineering, and Computer Science and Engineering of College of Engineering Trivandrum.
          </p>
          <p style={{ "lineHeight": "1.6" }}>
            <em>Join us at College of Engineering Trivandrum to be part of this dynamic exchange of ideas and innovations that are shaping the future of technology!</em>
          </p>
        </main>
        <img src={conferenceLogo} alt="Conference Logo" className="conference-logo" />
      </div>
    </div>
  );
}

export default WelcomePage;
