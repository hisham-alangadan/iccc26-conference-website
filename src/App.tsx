import Navbar from "./components/navbar";
import Home from "./components/home";
import WelcomePage from "./components/welcomePage";
import ConferenceInfo from "./components/conferenceInfo";
import ConferenceHighlights from "./components/conferenceHighlights";

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <WelcomePage />
      <ConferenceInfo />
      <ConferenceHighlights />
    </>
  )
}

export default App
