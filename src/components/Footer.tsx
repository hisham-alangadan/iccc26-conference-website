import './styles/footer.css';
import x from '../assets/x.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.webp'
import linkedin from '../assets/link.png'
import insignia from '../assets/image.png';
import ieee from '../assets/ieee mb white png.png';

export default function Footer() {
    return (
        <div className="footer-body">
            <div className="footer-panel images" style={{"display": "flex", "placeContent": "center"}}>
                <div>
                    <img src={ieee} style={{ "margin": "20% 0", "width": "20vh", "height": "5.85vh"}}></img>
                    <img src={insignia} className='footer-insignia'></img>
                </div>
            </div>
            <div className="footer-panel">
                <div className="social-media-links">
                    <img src={x} alt="" />
                    <img src={fb} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className="copyright">
                    <p className='copyright-text'>© 2024, ICCC 2025, College of Engineering Trivandrum. All Rights Reserved.</p>
                    <p className="credit">Developed by College of Engineering Trivandrum</p>
                </div>
            </div>
        </div>
    )
}