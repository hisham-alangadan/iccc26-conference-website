import ConfVenue from "../components/confVenue";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import '../components/styles/conferenceVenue.css';
function ConferenceVenue () {
    return (
        <>
            <Navbar />
            <div className = "Header">
                <h1>COLLEGE OF ENGINEERING TRIVANDRUM</h1>
            </div>
            <ConfVenue />
            <Footer />
        </>
    )
}

export default ConferenceVenue;