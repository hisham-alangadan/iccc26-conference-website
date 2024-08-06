// import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import WelcomePage from "./components/welcomePage";
import ConferenceInfo from "./components/conferenceInfo";
import ConferenceHighlights from "./components/conferenceHighlights";
import Venue from './pages/Venue';
import AboutUs from './pages/AboutUs';
import './App.css'
// added Venue and about pages temporarily.
function App() {

  return (
    // <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <WelcomePage />
          <ConferenceInfo />
          <ConferenceHighlights />
          </>}></Route>
        <Route path="/venue" element={<Venue/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
    // </Router>
  )
}

export default App
