import Footer from "../components/Footer";
import Navbar from "../components/navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faPlane } from "@fortawesome/free-solid-svg-icons/faPlane";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import "../components/styles/howReach.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressMap from "../components/addressMap.tsx";

const HowReach = () => (
    <>
        <Navbar />
        <div style={{ "padding": "0 5vw", "minHeight": "85vh", "placeContent": "center" }} className="how-reach-container" id="top">
            <h2 className="navy" id="top">JOURNEY TO CET</h2>
            <div className="journeyinfo-box">

            <p className="journeyinfo"> The College of Engineering Trivandrum (CET) is conveniently located in Sreekariyam, Thiruvananthapuram, Kerala. The Trivandrum International Airport is approximately 11 kilometres away and takes around 25-30 minutes by car. The Trivandrum Central Railway Station is even closer, about 10 kilometres from the campus, and takes roughly 20-25 minutes by car. This proximity to significant transport hubs ensures that CET is easily accessible for students, faculty, and visitors.</p>
            </div>
            <div style={{ "display": "flex", "placeContent": "center" }}>
                <table>
                    <tr className="airport-row">
                        <td><FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                        
                        Closest airport</td>
                        <td>Trivandrum International Airport (TRV)</td>
                        <td>11km</td>
                    </tr>
                    <tr className="rail-row">
                        <td rowSpan={3}><FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>
                        
                        Closest railway stations</td>
                        <td>Thiruvanantapuram Central (TVC)</td>
                        <td>12km</td>
                    </tr>
                    <tr className="rail-row">
                        <td>Thiruvanantapuram North (formerly Kochuveli) (KCVL)</td>
                        <td>8km</td>
                    </tr>
                    <tr className="rail-row">
                        <td>Kazhakkoottam (KTKM)</td>
                        <td>6km</td>
                    </tr>
                </table>
            </div>
        </div>
        <AddressMap />
        <Footer />
    </>
);

export default HowReach;