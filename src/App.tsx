import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import WelcomePage from "./components/welcomePage";
// import ConferenceInfo from "./components/conferenceInfo";
import Timeline from "./components/timeline.tsx";
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
import ContactUs from "./pages/ContactUs.tsx";

import './App.css'
import EventDetails from "./pages/EventDetails.tsx";
<<<<<<< HEAD
import Keynote from "./pages/Keynote.tsx";
import Tutorials from "./pages/Tutorials.tsx";
import EventSchedule from "./pages/EventSchedule.tsx";
=======
import Accomodation from "./pages/Accommodation.tsx";
import HowReach from "./pages/HowReach.tsx";
>>>>>>> 113452d14db40149bc9ac2bd2575bb2bc74c010e
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
          <Timeline />
          {/* <ConferenceInfo /> */}
          <ConferenceHighlights />
          {/* Vasanti's footer */}
          <Footer />
          </>}></Route>
        <Route path="/venue" element={<Venue/>}></Route>
        <Route path="/aboutus" element={<AboutUs venue={false} />}></Route>
        <Route path="/committee/organizing" element={<OrgCommittee/>}></Route>
        <Route path="/tracks" element={<Tracks/>}></Route>
        <Route path="/authors/submission-guidelines" element={<PaperSubmission />}></Route>
        <Route path="/authors/presentation-guidelines" element={<Presentation/>}> </Route>
        <Route path="/authors/cameraready-guidelines" element={<CameraReady />}></Route>
        <Route path="/speakers" element={<KeySpeakers/>}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/eventdetails" element={<EventDetails />}></Route>
        <Route path="/venue/conference" element={<AboutUs venue={true} />}></Route>
        <Route path="/venue/accomodation" element={<Accomodation />}></Route>
        <Route path="/venue/howtoreach" element={<HowReach />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
<<<<<<< HEAD
        <Route path="/keynote" element={<Keynote />}></Route>
        <Route path="/tutorials" element={<Tutorials />}></Route>
        <Route path="/eventschedule" element={<EventSchedule />}></Route>
=======

>>>>>>> 113452d14db40149bc9ac2bd2575bb2bc74c010e
      </Routes>
    </Router>
  )
}

export default App
