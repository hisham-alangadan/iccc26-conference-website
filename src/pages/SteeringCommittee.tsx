import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import '../components/styles/committee.css';

export default function SteeringCommittee() {
    const steeringCommitteeMembers = [
        "Prof. (Dr.) Jisha V. R., Dean UG Studies, CET",
        "Prof. (Dr.) Lekshmi A., Dean PG Studies, CET",
        "Prof. (Dr.) Sumesh Divakaran, Dean Research, CET",
        "Prof. (Dr.) Joseph Zacharias, Dean Student Affairs, CET",
        "Prof. (Dr.) Suneesh S.S., Dean International Affairs, CET",
        "Prof. (Dr.) Lal Priya P.S., Professor & Head, Dept of EE, CET",
        "Prof. (Dr.) Haris P.A., Professor & Head, Dept of ECE, CET",
        "Prof. (Dr.) Salim A, Professor & Head, Dept of CSE, CET"
    ];

    return (
        <>
            <Navbar />
            <div className="organizing-committee-container">
                <h1>Steering Committee</h1>
                
                <section className="introduction">
                    <p>Our esteemed Steering Committee comprises distinguished faculty members who provide strategic guidance and oversight for the conference. Their collective expertise ensures the event's alignment with our institution's vision and academic standards.</p>
                </section>

                <section className="steering-committee">
                    <h2>Committee Members</h2>
                    <ul>
                        {steeringCommitteeMembers.map((member, index) => (
                            <li key={index}><strong>{member}</strong></li>
                        ))}
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    )
}