import './styles/ContactUs.css';
import emailIcon from '../assets/EmailIcon.png';
import phoneIcon from '../assets/PhoneIcon.png';
import locationIcon from '../assets/LocationIcon.png';

const ContactUs = () => {
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <img src={emailIcon} alt="Email" className="icon" />
            <span>iccc2025@cet.ac.in</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="icon" />
            <span>+91 9447889009, +91 9495135213</span>
          </div>
          <div className="contact-item">
            <img src={locationIcon} alt="Location" className="icon" />
            <address>
              Dr. Rajeev T.<br />
              Organising Secretary, ICCC-2025<br />
              Professor<br />
              Department of Electrical Engineering,<br />
              College of Engineering Trivandrum,<br />
              Thiruvananthapuram - 695016 Kerala, India
            </address>
          </div>
        </div>
        <div className="footer-text">
          © 2024, ICCC 2025, College of Engineering Trivandrum. All Rights Reserved.
        </div>
      </div>
    );
  };
  
  export default ContactUs;