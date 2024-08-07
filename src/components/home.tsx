// import React from 'react';
// import logo from '../assets/cetLogo.svg';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="tint">
        <div className="content" style={{ "textAlign": "right" }}>
          <h1 style={{ "color": "white", "fontSize": "96px" }}>ICCC2025</h1>
          <h4 style={{ "color": "orange", "fontSize": "30px" }}>6<sup>th</sup> International Conference on <br />Control, Communication and Computing</h4>
          <p style={{ "fontSize": "28px" }}><i>Technical co-sponsor:</i> <br /> IEEE Kerala Section</p>

          <p style={{
            "fontSize": "24px", "fontWeight": "600"
          }}>May 23 - 25, 2025</p>
          {/* <a href="#" className="register-button">Register Now</a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;