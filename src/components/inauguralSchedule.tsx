import inauguralSchedule from "../assets/inauguralSchedule.pdf";
import "./styles/schedulePage.css";
import Navbar from "./navbar";
import Footer from "./Footer";

const InauguralSchedule = () => {
  return (
    <>
      <Navbar />
    <div className="schedule-page">
      <h1 className="schedule-heading">Inaugural Schedule</h1>
      <div className="pdf-container">
        <iframe
          src={inauguralSchedule}
          title="Inaugural Schedule PDF"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default InauguralSchedule;

