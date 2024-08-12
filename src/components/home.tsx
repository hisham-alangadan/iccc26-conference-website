// import React from 'react';
// import logo from '../assets/cetLogo.svg';
import './styles/home.css';
// import keralaCulture from '../assets/kerala-stuff.png';

const Home = () => {
  return (
    <div className="home">
      <div className="tint">
        <div className="content">
          <h1>ICCC 2025</h1>
          <h4>6<sup>th</sup> International Conference on <br/>Control, Communication and Computing</h4>
          <p><i>Technical co-sponsor:</i> <br/> IEEE Kerala Section</p>
          
          <p>May 23 - 25, 2025</p>
          {/* <a href="#" className="register-button">Register Now</a> */}
        </div>
      </div>
      {/* <div className="kerala-stuff">
        <img src={keralaCulture} alt="" />
      </div> */}
    </div>
  );
}

export default Home;