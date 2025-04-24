import { useParams } from "react-router-dom";
import "./styles/schedule.css";
import { track1Schedule } from "../data/track1";
import { track2Schedule } from "../data/track2";
import { track3Schedule } from "../data/track3";

const scheduleData: Record<string, typeof track1Schedule> = {
  track1: track1Schedule,
  track2: track2Schedule,
  track3: track3Schedule,
};

const Schedule = () => {
  const params = useParams<{ track?: string }>();
  const track = params.track;

  if (!track || !(track in scheduleData)) {
    return <div className="schedule-page">Invalid or missing track.</div>;
  }

  const data = scheduleData[track];

  return (
    <div className="schedule-page">
      <h2>{`Schedule - ${track.toUpperCase()}`}</h2>
      {data.map((session, i) => (
        <div className="session" key={i}>
          <h3>{session.sessionTitle}</h3>
<p><strong>Date:</strong> {session.date}</p>
<p><strong>Timing:</strong> {session.timing}</p>

          <table>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Session ID</th>
                <th>Paper ID</th>
                <th>Paper Title</th>
                <th>Authors</th>
              </tr>
            </thead>
            <tbody>
              {session.papers.map((paper, j) => (
                <tr key={j}>
                  <td>{paper.slno}</td>
                  <td>{paper.sessionId}</td>
                  <td>{paper.paperId}</td>
                  <td>{paper.title}</td>
                  <td>{paper.authors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
