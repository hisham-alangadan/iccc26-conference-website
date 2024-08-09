import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import WelcomePage from "./components/welcomePage";
import ConferenceInfo from "./components/conferenceInfo";
import ConferenceHighlights from "./components/conferenceHighlights";
// import ContactUs from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
import Venue from './pages/Venue';
import AboutUs from './pages/AboutUs';
import OrgCommittee from './pages/Committee.tsx';
import Tracks from './pages/Tracks.tsx';
import PaperSubmission from "./pages/PaperSubmission.tsx";
import Presentation from "./pages/Presentation.tsx";
import KeySpeakers from "./pages/KeynoteSpeakers.tsx";
import CameraReady from "./pages/CameraReady.tsx";
import Registration from "./pages/Registration.tsx";
import Contact from "./components/contact.tsx";
import AddressMap from "./components/addressMap.tsx";

import './App.css'
// import ImageCarousel from "./components/Carousel.tsx";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
          {/* <ImageCarousel /> */}
          <WelcomePage />
          <ConferenceInfo />
          <ConferenceHighlights />
          <Contact /> 
          <AddressMap />
          {/* Vasanti's footer */}
          <Footer />
          </>}></Route>
        <Route path="/venue" element={<Venue/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/committee/organizing" element={<OrgCommittee/>}></Route>
        <Route path="/tracks" element={<Tracks/>}></Route>
        <Route path="/authors/submission-guidelines" element={<PaperSubmission />}></Route>
        <Route path="/authors/presentation-guidelines" element={<Presentation/>}> </Route>
        <Route path="/authors/cameraready-guidelines" element={<CameraReady />}></Route>
        <Route path="/speakers" element={<KeySpeakers/>}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </Router>
  )
}

export default App
