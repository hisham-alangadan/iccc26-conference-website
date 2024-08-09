import './styles/contact.css';
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import loc from "../assets/loc.svg";

const ContactComponent = () => {
  return (
    <div className="contact-us">
      <h2 className='contact-head'>Contact Us</h2>
      <div className="contact-details">
        <p className='p-loc'><img src={mail} alt="" /> <div className='contact-mail'>iccc2025@cet.ac.in</div></p>
        <p className='p-loc'><img src={phone} alt="" /> <div>
            <div>+91 9447889009</div> <div>+91 9495135213</div>
        </div></p>
        <p className='p-loc'><div className='loc'><img src={loc} alt=""/></div>
          <div>
              <div>Dr. Rajeev T.</div>
              <div>Organising Secretary, ICCC-2025</div>
              <div>Professor</div>
              <div>Department of Electrical Engineering,</div>
              <div>College of Engineering Trivandrum,</div>
              <div>Thiruvananthapuram - 695016 Kerala, India</div>
          </div>
        </p>
      </div>
      {/* <footer>
        <p>© 2024, ICCC 2025, College of Engineering Trivandrum. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default ContactComponent;
