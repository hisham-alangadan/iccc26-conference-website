import Navbar from "./components/navbar";
import Home from "./components/home";
import WelcomePage from "./components/welcomePage";
import ConferenceInfo from "./components/conferenceInfo";
import ConferenceHighlights from "./components/conferenceHighlights";
import Venue from './pages/Venue';
import AboutUs from './pages/AboutUs';
import Organizing from "./pages/organizing";
import './App.css'
// added Venue and about pages temporarily.
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <WelcomePage />
      <ConferenceInfo />
      <ConferenceHighlights />
      <Venue />
      <AboutUs />
      <Organizing />
    </>
  )
}

export default App
