import aboutCET from '../assets/aboutCET.jpg';
import './styles/about.css';
const AboutCollege = () => {
    return (
        <div className="AboutUs-container">
            <main className="About-content">
                <div className="main-panel">
                    <div>
                        <h1>About the college</h1>
                        <p><strong>The College of Engineering Trivandrum (CET),</strong> established in 1939, stands as a beacon of excellence in technical education. </p>
                        <p>For 85 years, CET has been at the forefront of engineering education in India, consistently producing top-tier professionals and innovative research.</p>
                        <p>Our institution's rich history is matched only by its commitment to the future. From its humble beginnings as the first engineering college in the state of Kerala, CET has grown into a prestigious institution recognized nationwide for its academic rigor and research contributions.</p>
                    </div>
                    <div className="image-container">
                        <img src={aboutCET} alt="College photo" className="college-pic" />
                        <div className="rectangle-bottom"></div>
                        <div className="rectangle-left"></div>
                    </div>
                </div>
                <h2>Vision and Mission</h2><br></br>
                <div className="panel">
                    <div className="vision">
                        <h3><strong>Vision</strong></h3>
                        <p><em>National Level Excellence and International Visibility in Every Facet of Engineering Research and Education.</em></p>
                    </div>
                    <div className='mission'>
                    <h3><strong>Mission</strong></h3>
                        <p> <em>To impart quality education to develop innovative, technically competent, and ethically sound professionals capable of meeting global challenges.</em></p>
                        <p> <em>To foster innovations in Technology and its application for meeting global challenges.</em></p>
                        <p><em>To pursue and disseminate Quality Research.</em></p>
                        <p><em>To equip, enrich and transform students to be Responsible Professionals for better service to humanity.</em></p>
                    </div>
                </div>

                <div className="additional-info">
                    <h2>More About CET</h2>
                    <div className="info-panel">
                        <div className="info-section">
                            <h3>History and Governance</h3>
                            <p>The College of Engineering Trivandrum (CET) is one of Kerala, India's most prestigious engineering institutions. Established in 1939, it is the first engineering college in the state and has a rich history of academic excellence. CET is governed by the Director of Technical Education Kerala, Govt. of Kerala.</p>
                        </div>
                        <div className="info-section">
                            <h3>Academic Programs</h3>
                            <p>The College currently offers eight undergraduate, 30 postgraduate, and doctoral programmes.</p>
                        </div>
                        <div className="info-section">
                            <h3>Campus and Facilities</h3>
                            <p>The College is located in Sreekariyam, Thiruvananthapuram, Kerala. It has a sprawling campus with state-of-the-art facilities, including well-equipped labs, workshops, libraries, and hostels.</p>
                        </div>
                        <div className="info-section">
                            <h3>Research and Development</h3>
                            <p>CET has a strong emphasis on research and development. Students and faculty conduct research projects in thrust areas of science and engineering. The institute has ongoing academic and research collaborations with governments and industries to keep pace with expanding frontiers of knowledge and global developments.</p>
                        </div>
                        <div className="info-section">
                            <h3>Student Life</h3>
                            <p>CET is particularly known for its vibrant student community, which infuses the campus with energy and enthusiasm. Various clubs and societies focusing on cultural, technical, and social activities contribute to this vibrant atmosphere. The College hosts several annual events, including "Drishti" (technical fest) and "Dhwani" (cultural fest).</p>
                        </div>
                        <div className="info-section">
                            <h3>Location and Accessibility</h3>
                            <p>College of Engineering Trivandrum (CET) is conveniently located, with the Trivandrum International Airport approximately 11 kilometres away, taking around 25-30 minutes by car. The Trivandrum Central Railway Station is even closer, about 10 kilometres from the campus, with a travel time of roughly 20-25 minutes by car. This proximity to both major transport hubs ensures that CET is easily accessible for students, faculty, and visitors.</p>
                        </div>
                    </div>
                    <a href="https://cet.ac.in/"><h4>Visit the main site</h4></a>
                </div>
            </main>
        </div>
    );
}

export default AboutCollege;