import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import '../components/styles/committee.css';

export default function AdvisoryCommittee() {
    const advisoryCommitteeMembers = [
        "Prof. (Dr.) Debapriya Das, IIT Kharagpur",
        "Prof. (Dr.) Bhavesh Kumar R.Bhalja, IIT Roorkee",
        "Prof. (Dr.) Abhijit Kshirsagar, IIT Dharwad",
        "Prof. (Dr.) Ashok S., NIT, Calicut",
        "Prof. (Dr.) Vijayan K Asari, University of Dayton, USA",
        "Prof. (Dr.) Prahlad Vadakkepat, National University of Singapore",
        "Prof. (Dr.) Mini C Rai, University of Lincoln, UK",
        "Prof. (Dr.) Darsana P Josyula, Bowie State University, USA",
        "Prof. (Dr.) Vijay Ganesh, University of Waterloo, Canada",
        "Prof. (Dr.) Aditya Paranjape, Imperial College, London",
        "Prof. (Dr.) Rijil Ramchand, NIT, Calicut",
        "Prof. (Dr.) S.M. Sameer, NIT, Calicut",
        "Prof. (Dr.) Madhu Kumar S.D., NIT, Calicut",
        "Prof. (Dr.) Kumaravel S., NIT, Calicut",
        "Prof. (Dr.) Sindhu Thampatty K.C, Amrita School of Engineering, Coimbatore",
        "Prof. (Dr.) Vasanthi V, NSS College of Engineering, Palakkad",
        "Prof. (Dr.) S.Sankararaman, Kerala University, Kariyavattom",
        "Prof. (Dr.) R.Sudharshan Kaarthik, IIST, Thiruvananthapuram",
        "Prof. (Dr.) Rajesh Joseph Abraham, IIST, Thiruvananthapuram",
        "Prof. (Dr.) P.G Latha, School of Engineering, CUSAT",
        "Prof. (Dr.) Hemendra Arya, IIT Bombay",
        "Prof. (Dr.) Jeevanand S, IIT Roorkee",
        "Prof. (Dr.) Arnab Sarkar, IIT Kharagpur",
        "Prof. (Dr.) John Jose, IIT Guwahati",
        "Prof. (Dr.) K.Gopakumar, IISc, Bangalore",
        "Prof. (Dr.) Shiny G. , Pricipal, Govt. Engineering College Barton Hill"
    ];

    return (
        <>
            <Navbar />
            <div className="organizing-committee-container">
                <h1>Advisory Committee</h1>
                
                <section className="introduction">
                    <p>Our esteemed Advisory Committee comprises distinguished academicians and researchers from renowned institutions in the country. Their collective expertise and guidance are instrumental in shaping the conference's academic direction and ensuring its global relevance and impact.</p>
                </section>

                <section className="main-committee">
                    <h2>Committee Members</h2>
                    <ul>
                        {advisoryCommitteeMembers.map((member, index) => (
                            <li key={index}><strong>{member}</strong></li>
                        ))}
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    )
}