import Footer from "../components/Footer";
import Navbar from "../components/navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { faPlane } from "@fortawesome/free-solid-svg-icons/faPlane";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import "../components/styles/howReach.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowReach = () => (
    <>
        <Navbar />
        <div style={{ "padding": "0 5vw", "minHeight": "100vh", "placeContent": "center" }} className="how-reach-container">
            <h2 className="navy">Getting to campus</h2>
            <div style={{ "display": "flex", "placeContent": "center" }}>
                <table>
                    <tr className="airport-row">
                        <td><FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
                        
                        Closest airport</td>
                        <td>Trivandrum International Airport (TRV)</td>
                        <td>11km</td>
                    </tr>
                    <tr className="rail-row">
                        <td rowspan={3}><FontAwesomeIcon icon={faTrain}></FontAwesomeIcon>
                        
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
        <Footer />
    </>
);

export default HowReach;