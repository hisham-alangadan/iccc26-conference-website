// import React, { useEffect } from 'react';
import './styles/home.css';
// import bg1 from "../assets/cet.jpg";

// const images = [
//   bg1
// ];

const Home = () => {
  // useEffect(() => {
  //   let currentIndex = 0;
  //   const slideshowInterval = setInterval(() => {
  //     document.getElementById('slideshow').style.backgroundImage = `url(${images[currentIndex]})`;
  //     currentIndex = (currentIndex + 1) % images.length;
  //   }, 3000);

  //   return () => clearInterval(slideshowInterval); // Cleanup on component unmount
  // }, []);

  return (
    <div className="home">
      <div id="slideshow" className="slideshow">
        <div className="tint-home">
          <div className="content">
            <h1>ICCC 2025</h1>
            <h4>6<sup>th</sup> International Conference on <br/>Control, Communication and Computing</h4>
            <p><i>Technical co-sponsor:</i> <br/> IEEE Kerala Section</p>
            <p>May 23 - 25, 2025</p>
            {/* <a href="#" className="register-button">Register Now</a> */}
          </div>
        </div>
      </div>
      {/* <div className="kerala-stuff">
        <img src={keralaCulture} alt="" />
      </div> */}
    </div>
  );
}

export default Home;
