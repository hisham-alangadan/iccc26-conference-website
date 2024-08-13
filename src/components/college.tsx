// import insignia from "../assets/cetLogo.svg";
import cetlogo from "../assets/College_of_Engineering_Trivandrum_logo.png";
import './styles/college.css';

const College = () => {
  return (
    <div className="collegeBackground">
      <div className="tint-header">
        <div className="collegeInsignia">
          <div className="collegeInsigniaImg">
            <img src={cetlogo} />
            {/* <div className="insignia-bg"></div> */}
          </div>
          <div className="collegeText">
            <h1>College of Engineering Trivandrum </h1>
            <h3>कर्म ज्यायः हि अकर्मणः | action is superior to inaction</h3>
            {/* <div className="collegeText-bg"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default College;