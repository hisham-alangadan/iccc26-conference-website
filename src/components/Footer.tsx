import './styles/footer.css';
import x from '../assets/x.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.webp'
import linkedin from '../assets/link.png'

export default function Footer() {
    return (
        <div className="footer-body">
            <div className="social-media-links">
                <img src={x} alt="" />
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <div className="copyright">
                <p className='copyright-text'>© 2024, ICCC 2025, College of Engineering Trivandrum. All Rights Reserved. </p>
                <p className="credit">Developed by the students of College of Engineering Trivandrum</p>
            </div>

        </div>
    )
}