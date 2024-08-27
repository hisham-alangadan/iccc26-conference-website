import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import '../components/styles/committee.css';

export default function AdvisoryCommittee() {
    // const advisoryCommitteeMembers = [
    //     "Prof. (Dr.) Saji Gopinath, Vice Chancellor, APJ Abdul Kalam Technological University",
    //     "Prof. (Dr.) Debapriya Das, IIT Kharagpur",
    //    	"Prof. (Dr.) Bhavesh Kumar R.Bhalja, IIT Roorkee",
    //    	"Prof. (Dr.)  Abhijit Kshirsagar, IIT Dharwad",
    //     "Prof. (Dr.)  Ashok S., NIT, Calicut",
    //     "Prof. (Dr.)  Vijayan K Asari, University of Dayton, USA",
    //     "Prof. (Dr.)  Prahlad Vadakkepat, National University of Singapore",
    //     "Prof. (Dr.) Mini C Rai, University of Lincoln, UK",
    //     "Prof. (Dr.)  Darsana P Josyula, Bowie State University, USA",
    //     "Prof. (Dr.)  Vijay Ganesh, University of Waterloo, Canada",
    //     "Prof. (Dr.)  Aditya Paranjape, Imperial College, London",
    //     "Prof. (Dr.) Shiny G, Principal, Govt. Engineering College BartonHill",
    //     "Prof. (Dr.)  Rijil Ramchand, NIT, Calicut",
    //     "Prof. (Dr.)  S.M. Sameer, NIT, Calicut",
    //     "Prof. (Dr.)  Madhu Kumar S.D., NIT, Calicut",
    //     "Prof. (Dr.)  Kumaravel S., NIT, Calicut",
    //     "Prof. (Dr.)   Sindhu Thampatty K.C, Amrita School of Engineering, Coimbatore",
    //     "Prof. (Dr.)  Vasanthi V, NSS College of Engineering, Palakkad",
    //     "Prof. (Dr.)   S.Sankararaman, Kerala University, Kariyavattom",
    //     "Prof. (Dr.)  R.Sudharshan Kaarthik, IIST, Thiruvananthapuram",
    //     "Prof. (Dr.)  Rajesh Joseph Abraham, IIST, Thiruvananthapuram",
    //     "Prof. (Dr.)  P.G Latha, School of Engineering, CUSAT",
    //  	"Prof. (Dr.)  Hemendra Arya, IIT Bombay",
    //   	"Prof. (Dr.)  Jeevanand S, IIT Roorkee",
    //     "Prof. (Dr.)   Arnab Sarkar, IIT Kharagpur",
    //    	"Prof. (Dr.)   John Jose, IIT Guwahati",
    //  	"Prof. (Dr.)   K.Gopakumar, IISc, Bangalore",
    // ];

    const advisoryCommitteeMembers = [
        { name: "Prof. (Dr.) Savier J S", designation: "Principal", college: "Govt. Engineering College Idukki" },
        { name: "Prof. (Dr.) Saji Gopinath", designation: "Vice Chancellor,\nAPJ Abdul Kalam Technological University" },
        { name: "Prof. (Dr.) Debapriya Das", designation: "IIT Kharagpur" },
        { name: "Prof. (Dr.) Bhavesh Kumar R. Bhalja", designation: "IIT Roorkee" },
        { name: "Prof. (Dr.) Abhijit Kshirsagar", designation: "IIT Dharwad" },
        { name: "Prof. (Dr.) Ashok S.", designation: "NIT, Calicut" },
        { name: "Prof. (Dr.) Vijayan K Asari", designation: "University of Dayton, USA" },
        { name: "Prof. (Dr.) Prahlad Vadakkepat", designation: "National University of Singapore" },
        { name: "Prof. (Dr.) Mini C Rai", designation: "University of Lincoln, UK" },
        { name: "Prof. (Dr.) Darsana P Josyula", designation: "Bowie State University, USA" },
        { name: "Prof. (Dr.) Vijay Ganesh", designation: "University of Waterloo, Canada" },
        { name: "Prof. (Dr.) Aditya Paranjape", designation: "Imperial College, London" },
        { name: "Prof. (Dr.) Shiny G", designation: "Principal, Govt. Engineering College BartonHill" },
        { name: "Prof. (Dr.) Rijil Ramchand", designation: "NIT, Calicut" },
        { name: "Prof. (Dr.) S.M. Sameer", designation: "NIT, Calicut" },
        { name: "Prof. (Dr.) Madhu Kumar S.D.", designation: "NIT, Calicut" },
        { name: "Prof. (Dr.) Kumaravel S.", designation: "NIT, Calicut" },
        { name: "Prof. (Dr.) Sindhu Thampatty K.C", designation: "Amrita School of Engineering, Coimbatore" },
        { name: "Prof. (Dr.) Vasanthi V", designation: "NSS College of Engineering, Palakkad" },
        { name: "Prof. (Dr.) S. Sankararaman", designation: "University of Kerala, Kariyavattom" },
        { name: "Prof. (Dr.) R. Sudharshan Kaarthik", designation: "IIST, Thiruvananthapuram" },
        { name: "Prof. (Dr.) Rajesh Joseph Abraham", designation: "IIST, Thiruvananthapuram" },
        { name: "Prof. (Dr.) P.G. Latha", designation: "School of Engineering, CUSAT" },
        { name: "Prof. (Dr.) Hemendra Arya", designation: "IIT Bombay" },
        { name: "Prof. (Dr.) Jeevanand S", designation: "IIT Roorkee" },
        { name: "Prof. (Dr.) Arnab Sarkar", designation: "IIT Kharagpur" },
        { name: "Prof. (Dr.) John Jose", designation: "IIT Guwahati" },
        { name: "Prof. (Dr.) K. Gopakumar", designation: "IISc, Bangalore" },
    ];
    

    return (
        <>
            <Navbar />
            <div className="organizing-committee-container">
                <h1>Advisory Committee</h1>
                
                <section className="introduction">
                    <p>Our esteemed Advisory Committee comprises distinguished academicians and researchers from renowned institutions in the country and abroad. Their collective expertise and guidance are instrumental in shaping the conference's academic direction and ensuring its global relevance and impact.</p>
                </section>

                <section className="main-committee">
                    <h2>Committee Members</h2>
                    <ul>
                        {advisoryCommitteeMembers.map((member, index) => (
                            <li key={index}><strong>{member.name}</strong><br />{member.designation}{member.college && ", " + member.college}</li>
                        ))}
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    )
}