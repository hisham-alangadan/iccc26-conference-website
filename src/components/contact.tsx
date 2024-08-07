import './styles/contact.css';

const ContactU = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:iccc2025@cet.ac.in">iccc2025@cet.ac.in</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+919447889009">+91 9447889009</a>
          <a href="tel:+919495135213">+91 9495135213</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <address>
            Dr. Rajeev T. Organising Secretary, ICCC-2025<br />
            Professor Department of Electrical Engineering,<br />
            College of Engineering Trivandrum,<br />
            Thiruvananthapuram - 695016<br />
            Kerala, India
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactU;