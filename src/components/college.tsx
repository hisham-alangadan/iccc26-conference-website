import insignia from "../assets/cetLogo.svg";
import './styles/college.css';

const College = () => {
  return (
    <div className="collegeBackground">
      <div className="tint">
      <div className="collegeInsignia">
        <div className="collegeInsigniaImg">
            <img src={insignia}/>
        </div>
        <div className="collegeText">
        <h1>College of Engineering Trivandrum </h1>
        <h3>karma jyāyaḥ hi akarmaṇah | action is superior to inaction</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default College;