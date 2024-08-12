import ConferenceVenueComponent from "../components/conferencevenue";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

export default function ConferenceVenue () {
    return (
        <>
            <Navbar />
            <ConferenceVenueComponent />
            <Footer />
        </>
    )
}