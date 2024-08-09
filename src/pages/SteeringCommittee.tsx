import Navbar from '../components/navbar';
import '../components/styles/committee.css';

export default function SteeringCommittee() {
    return (
        <>
            <Navbar />
            <div className="organizing-committee-container">
                <h1>Steering Committee</h1>
                <ul style={{"fontWeight":"600", "fontSize":"18px", "lineHeight":"180%"}}>
                    <li>Prof. (Dr.) Jisha V. R., Dean UG Studies, CET</li>
                    <li>Prof. (Dr.) Lekshmi A., Dean PG Studies, CET</li>
                    <li>Prof. (Dr.) Sumesh Divakaran, Dean Research, CET</li>
                    <li>Prof. (Dr.) Joseph Zacharias, Dean Student Affairs, CET</li>
                    <li>Prof. (Dr.) Suneesh S.S., Dean International Affairs, CET</li>
                    <li>Prof. (Dr.) Lal Priya P.S.,Professor &amp; Head ,Dept of EE, CET</li>
                    <li>Prof. (Dr.) Haris P.A.,Professor &amp; Head , Dept of ECE, CET</li>
                    <li>Prof. (Dr.) Salim A, Professor &amp; Head ,Dept of CSE, CET</li>
                </ul>
            </div>
        </>
    )
}