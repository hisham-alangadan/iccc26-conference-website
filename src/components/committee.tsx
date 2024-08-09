import './styles/committee.css';

const OrganizingCommittee = () => {
    return (
        <div className="organizing-committee-container">
            <h1>Organizing Committee</h1>

            <section className="introduction">
                <p>The success of our conference is made possible by the dedicated efforts of our esteemed organizing committee. Comprising distinguished faculty members from various departments, this committee brings together a wealth of experience and expertise to ensure a high-quality, impactful event.</p>
            </section>

            <section className="main-committee">
                <h2>Chief Patron</h2>
                <ul>
                    <li><strong>Dr. Venu. V IAS - Chief Secretary, Govt. of Kerala</strong></li>
                </ul>

                <h2>Patron</h2>
                <ul>
                    <li><strong>Smt. Ishita Roy IAS - Principal Secretary, Higher Education Department, Govt. of Kerala</strong></li>
                </ul>

                <h2>Co-Patron</h2>
                <ul>
                    <li><strong>Dr. Shalij P. R. - Director of Technical Education, Govt. of Kerala</strong></li>
                </ul>

                <h2>General Chair</h2>
                <ul>
                    <li><strong>Dr. Savier J S - Principal, College of Engineering Trivandrum</strong></li>
                </ul>

                <h2>Organizing Secretary</h2>
                <ul>
                    <li><strong>Dr. Rajeev T. - Professor, Dept. of EE, CET</strong></li>
                </ul>

                <h2>General Co-chairs</h2>
                <ul>
                    <li><strong>Dr. R.M. Shereef - Professor, Dept. of EE, CET</strong></li>
                    <li><strong>Dr. Christy James Jose - Associate Professor, Dept. of ECE, CET</strong></li>
                    <li><strong>Dr. Ajeesh Ramanujan - Associate Professor, Dept. of CSE, CET</strong></li>
                </ul>
            </section>

            <section className="other-committees">
                <h2>Other Committees</h2>

                {committees.map((committee, index) => (
                    <div key={index} className="committee">
                        <h3>{committee.name}</h3>
                        <div className="committee-content">
                            <div className="committee-chair">
                                <p>Chair: {committee.chair}</p>
                            </div>
                            {committee.coChairs && (
                                <div className="committee-co-chairs">
                                    <p><strong>Co-chairs:</strong> {committee.coChairs.join(', ')}</p>
                                </div>
                            )}
                            <div className="committee-members">
                                <h4>Members:</h4>
                                <ul>
                                    {committee.members.map((member, memberIndex) => (
                                        <li key={memberIndex}><strong>{member}</strong></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

const committees = [
    {
        name: "Technical Program Committee",
        chair: "Dr. Jerrin Thomas Panachakel - Assistant Professor, Dept. of ECE, CET",
        coChairs: [
            "Dr. Praveen S Babu - Associate Professor, Dept. of EE, CET",
            "Dr. Linu Shine - Associate Professor, Dept. of ECE, CET",
            "Dr. Dhanya S.Pankaj - Assistant Professor, Dept. of CSE, CET"
        ],
        members: [
            "Dr. Jayakumar P. - Associate Professor, Dept. of EE, CET",
            "Prof. Sabina.M.A - Associate Professor, Dept. of MCA, CET",
            "Dr. Biju K.S - Associate Professor, Dept. of ECE, CET"
        ]
    },
    {
        name: "Finance Committee",
        chair: "Dr. Mabel Ebenezer - Professor, Dept. of EE, CET",
        members: [
            "Dr. Nikhil.M - Assistant Professor, Dept. of ECE, CET",
            "Prof. Rani Koshy - Assistant Professor, Dept. of CSE, CET",
            "Prof. Divya Krishnan - Assistant Professor, Dept. of EE, CET"
        ]
    },
    {
        name: "Publication Committee",
        chair: "Dr. Harikumar.R - Associate Professor, Dept. of EE, CET",
        members: [
            "Dr. Vinod.B.R - Associate Professor, Dept. of ECE, CET",
            "Prof. Deepa M.U - Assistant Professor, Dept. of EE, CET",
            "Prof. Resmi E - Assistant Professor, Dept. of ECE, CET",
            "Prof. Narasimhan T - Assistant Professor, Dept. of CSE, CET"
        ]
    },
    {
        name: "Website Committee",
        chair: "Prof. John Prakash Joseph - Associate Professor, Dept. of EE, CET",
        members: [
            "Dr. Piyoosh P. - Assistant Professor, Dept. of CSE, CET",
            "Prof. Deepa. S.S - Associate Professor, MCA, CET",
            "Prof. Viji. R - Assistant Professor, Dept. of ECE, CET"
        ]
    },
    {
        name: "Tutorial and Keynote Committee",
        chair: "Prof. Leena V.A - Assistant Professor, Dept. of CSE, CET",
        coChairs: ["Dr. Sreeja. S - Associate Professor, Dept. of EE, CET"],
        members: [
            "Dr. Reshmi S Bhooshan - Assistant Professor, Dept. of ECE, CET",
            "Prof. Haseela H.A - Assistant Professor (Adhoc), Dept. of CSE, CET"
        ]
    },
    {
        name: "Publicity Committee",
        chair: "Dr. Pradeep R. - Professor, Dept. of ECE, CET",
        members: [
            "Dr. Vivek R.S - Assistant Professor, Dept. of EE, CET",
            "Prof. Sohan Placid John - Assistant Professor, Dept. of EE, CET",
            "Dr. Vinod. B.R - Associate Professor, Dept. of ECE, CET",
            "Dr.Saritha.R - Associate Professor, Dept. of CSE, CET"
        ]
    },
    {
        name: "Food and Accommodation Committee",
        chair: "Prof. Tonny K B - Assistant Professor, Dept. of Mathematics",
        members: [
            "Dr. Praveen Kumar T K - Assistant Professor, Dept. of Physical Education",
            "Prof. Akhil. I. R - Assistant Professor, Dept. of EE, CET",
            "Prof. Prajeesh.P. Prabhakaran - Assistant Professor, Dept. of EE, CET",
            "Prof. Adersh V.R - Assistant Professor, Dept. of ECE, CET",
            "Prof. Titto Anujan - Assistant Professor, Dept. of ECE, CET",
            "Prof. Sunitha D - Assistant Professor (Adhoc), Dept. of CSE, CET",
            "Prof. Bincy.P.Mathew - Assistant Professor(Adhoc), Dept. of CSE,CET"
        ]
    },
    {
        name: "Venue Management Committee",
        chair: "Prof. Saina Deepthi - Associate Professor, Dept. of EE, CET",
        members: [
            "Dr. Lekshmi Mohan - Associate Professor, Dept. of EE, CET",
            "Prof. Smitha K S - Associate Professor, Dept. of EE, CET",
            "Prof. Sudhi S - Assistant Professor, Dept. of ECE, CET",
            "Prof. P G Gigy - Assistant Professor, Dept. of ECE, CET",
            "Prof. Prafulla P - Assistant Professor, Dept. of CSE, CET",
            "Prof. Pooja J. P - Assistant Professor (Adhoc), Dept. of MCA, CET",
            "Prof. M. Roykumar - Associate Professor, Dept. of EE, CET"
        ]
    },
    {
        name: "Transportation Committee",
        chair: "Prof. Sajeev Mohan M. - Assistant Professor, Dept. of Physics, CET",
        members: [
            "Dr. Binu L.S. - Professor, Dept. of ECE, CET",
            "Prof. Sabir V.E. - Assistant Professor, Dept. of EE, CET",
            "Prof. Akhil V.V - Assistant Professor (Adhoc), Dept. of CSE, CET"
        ]
    },
    {
        name: "Certificate Committee",
        chair: "Dr. Arlene Davidson R. - Associate Professor, Dept. of EE, CET",
        members: [
            "Dr. Asha Prasad - Associate Professor, Dept. of ECE, CET",
            "Prof. Divya S K - Assistant Professor (Adhoc), Dept. of CSE, CET",
            "Dr. Ann Mary Joshua - Assistant Professor, Dept. of EE, CET"
        ]
    },
    {
        name: "Registration Committee",
        chair: "Prof. T. Samina - Associate Professor, Dept. of EE, CET",
        members: [
            "Prof. Sreedevi G. - Assistant Professor, Dept. of EE, CET",
            "Prof. Jijina N. - Assistant Professor, Dept. of ECE, CET",
            "Prof. Sree Vidhya K S - Assistant Professor (Adhoc), Dept. of CSE, CET"
        ]
    }
];

export default OrganizingCommittee;