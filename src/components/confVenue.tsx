// import aboutCET from '../assets/aboutCET.jpg';
import aboutCET from '../assets/aravindPic.jpg';
import './styles/conferenceVenue.css';
const ConfVenue = () => {
    return (
        <div className="conf-venue-container">
            <main className="conf-venue-content">
                <div className="conf-venue-main-panel">
                    <div className="about-text">
                        {/* <h1>About the college</h1> */}
                        {/* <p><strong>The College of Engineering Trivandrum (CET),</strong> established in 1939, stands as a beacon of excellence in technical education. </p>
                        <p>For 85 years, CET has been at the forefront of engineering education in India, consistently producing top-tier professionals and innovative research.</p>
                        <p>Our institution's rich history is matched only by its commitment to the future. From its humble beginnings as the first engineering college in the state of Kerala, CET has grown into a prestigious institution recognized nationwide for its academic rigor and research contributions.</p> */}
                        <p><strong>College of Engineering Trivandrum (CET)</strong> is one of Kerala, India's most prestigious engineering institutions. Established in 1939, it is the first engineering college in the state and has a rich history of academic excellence. CET is governed by the Director of Technical Education Kerala, Govt. of Kerala. The College currently offers eight undergraduate, 30 postgraduate, and several doctoral programmes. The College is located in Sreekariyam, Thiruvananthapuram, Kerala. The College has a sprawling campus with state-of-the-art facilities, including well-equipped labs, workshops, libraries, and hostels. It also has a strong emphasis on research and development. Students and faculty conduct research projects in thrust areas of science and engineering. The institute has ongoing academic and research collaborations with governments and industries in order to keep pace with expanding frontiers of knowledge and global developments. The institute has research facilities to conduct R&D projects, consultancy and research in various fields. CET is particularly known for its vibrant student community, which infuses the campus with energy and enthusiasm. Various clubs and societies focusing on cultural, technical, and social activities contribute to this vibrant atmosphere. The College hosts several annual events, including "Drishti" (technical fest) and "Dhwani" (cultural fest).</p>
                    </div>
                    <div className="conf-venue-image-container">
                        <img src={aboutCET} alt="College photo" className="conf-venue-college-pic" />
                        <div className="rectangle-bottom"></div>
                        <div className="rectangle-left"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ConfVenue;