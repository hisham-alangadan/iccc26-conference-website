import programSchedule from "../assets/programSchedule.pdf";
import "./styles/schedulePage.css";
import Navbar from "./navbar";
import Footer from "./Footer";

const ProgramSchedule = () => {
  return (
    <>
      <Navbar />
    <div className="schedule-page">
      <h1 className="schedule-heading">Program Schedule</h1>
      <div className="pdf-container">
        <iframe
          src={programSchedule}
          title="Program Schedule PDF"
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

export default ProgramSchedule;
