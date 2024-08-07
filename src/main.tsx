// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <App />
      {/* </BrowserRouter> */}
    </React.StrictMode>,
  )
  
//   import Navbar from "./components/navbar";
//   import Home from "./components/home";
//   import WelcomePage from "./components/welcomePage";
//   import ConferenceInfo from "./components/conferenceInfo";
//   import ConferenceHighlights from "./components/conferenceHighlights";
//   import Venue from './pages/Venue';
//   import AboutUs from './pages/AboutUs';
//   import './App.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   // <React.StrictMode>
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//       <Routes>
//         <Route path="/" element={<>
//           <Navbar />
//           <Home />
//           <WelcomePage />
//           <ConferenceInfo />
//           <ConferenceHighlights />
//           </>}></Route>
//         <Route path="/venue" element={<Venue/>}></Route>
//         <Route path="/aboutus" element={<AboutUs/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   // </React.StrictMode>,
// )
