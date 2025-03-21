import Navbar from "../components/navbar";
import College from "../components/college";
import  KeynoteSpeakers from "../components/KeySpeakers";
import TutorialSpeakers from "../components/TutorialSpeakers";
import Footer from "../components/Footer";

function KeySpeakers() {
    return(
        <>
        <Navbar />
        <College />
        <KeynoteSpeakers />
        <TutorialSpeakers />
        <Footer />
        </>
    )
}

export default KeySpeakers;