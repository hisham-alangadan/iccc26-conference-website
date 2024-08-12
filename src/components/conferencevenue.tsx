import './styles/dept.css';
import CSEDept from '../assets/CSEDept.jpg';
import ECEDept from '../assets/ECEDept.jpg';
import EEEDept from '../assets/EEEDept.jpg';

export default function ConferenceVenueComponent() {
    return (
        <div className="departments-container">
            <h1>Conference Venue</h1>
            <p><em>The conference is jointly organized by three leading faculties of College of Engineering Trivandrum:</em></p>
            <p>The collaboration of these three departments brings together a wealth of expertise, fostering interdisciplinary research and innovation in the rapidly evolving fields of computer science, electronics, and electrical engineering.</p>

            <div className="department-section">
                <div className="department-content">
                    <h2><strong>Department of Electrical Engineering (EEE)</strong></h2>
                    <p>As one of the oldest departments in CET, established in 1939, the EEE department has a rich legacy of excellence. With a strong emphasis on sustainable energy solutions and power systems, it has been instrumental in driving innovation in areas such as smart grids, electric vehicles, and renewable energy integration. The department's research has practical applications that address real-world challenges, contributing significantly to the evolution of electrical engineering.</p>
                </div>
                <div className="department-image">
                    <img src={EEEDept} alt="Electrical Department" />
                </div>
            </div>

            <div className="department-section">
                <div className="department-content">
                    <h2><strong>Department of Electronics and Communication Engineering (ECE)</strong></h2>
                    <p>Since its inception in 1960, the ECE department has been a pioneer in the field of electronics and communication. Known for its advanced research facilities, the department focuses on areas like signal processing, wireless communications, VLSI design, and embedded systems. The ECE department has garnered numerous accolades for its contributions to both academia and industry, fostering innovation and technological advancement.</p>
                </div>
                <div className="department-image">
                    <img src={ECEDept} alt="Electronics Department" />
                </div>
            </div>

            <div className="department-section">
                <div className="department-content">
                    <h2><strong>Department of Computer Science and Engineering (CSE)</strong></h2>
                    <p>The CSE department at CET is at the forefront of digital innovation. Established in 1984, it is the oldest Computer Science school in Kerala, and has since then consistently produced industry leaders and cutting-edge research. The department's most prominent research interests are artificial intelligence, machine learning, cybersecurity, and big data analytics. With state-of-the-art laboratories and a faculty of distinguished experts, CSE at CET is shaping the future of computing technology.</p>
                </div>
                <div className="department-image">
                    <img src={CSEDept} alt="Computer Science Department" />
                </div>
            </div>

        </div>
    )
}