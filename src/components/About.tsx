// import aboutCET from '../assets/aboutCET.jpg';
import aboutCET from '../assets/aravindPic.jpg';
import './styles/about.css';
const AboutCollege = () => {
    return (
        <div className="AboutUs-container">
            <main className="About-content">
                <div className="main-panel">
                    <div>
                        <h2>ABOUT THE COLLEGE</h2>
                        <p><strong>The College of Engineering Trivandrum (CET),</strong> established in 1939, stands as a beacon of excellence in technical education. </p>
                        <p>For 85 years, CET has been at the forefront of engineering education in India, consistently producing top-tier professionals and innovative research.</p>
                        <p>Our institution's rich history is matched only by its commitment to the future. From its humble beginnings as the first engineering college in the state of Kerala, CET has grown into a prestigious institution recognized nationwide for its academic rigor and research contributions.</p>
                    </div>
                    <div className="image-container image-container-abtus">
                        <img src={aboutCET} alt="College photo" className="college-pic" />
                        <div className="rectangle-bottom"></div>
                        <div className="rectangle-left"></div>
                    </div>
                </div>
                <h2>VISION AND MISSION</h2><br></br>
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
                    <h2>MORE ABOUT CET</h2>
                    <div className="info-panel">
                        <div className="info-section">
                            <h3>History and Governance</h3>
                            <p>The College of Engineering Trivandrum (CET) is one of the most prestigious engineering institutions in Kerala, India. It was established in 1939 and is the first engineering college in the state, boasting a rich history of academic excellence. CET is governed by the Director of Technical Education Kerala, Govt. of Kerala and is affiliated with the APJ Abdul Kalam Technological University (KTU). </p>
                        </div>
                        <div className="info-section">
                            <h3>Academic Programs</h3>
                            <p>The College of Engineering Trivandrum (CET) offers a comprehensive range of academic programs, including undergraduate (B.Tech and B.Arch), postgraduate (M.Tech, M.Plan, M.Arch, and MBA), and doctoral (Ph.D.) degrees across various engineering, architecture, and management disciplines. Currently, the College offers eight undergraduate, 30 postgraduate, and doctoral programmes. CET also provides courses and programs specifically designed for working professionals, allowing them to enhance their skills and knowledge while maintaining their careers.</p>
                        </div>
                        <div className="info-section">
                            <h3>Campus and Facilities</h3>
                            <p>The College has a sprawling campus with state-of-the-art facilities, including well-equipped labs, workshops, libraries, and hostels. The labs are outfitted with modern equipment and software, providing hands-on learning opportunities and supporting research projects. CET's computer centre is a central facility that offers high-speed internet access, advanced computing resources, and software tools for students and faculty. CET has extensive sports facilities, including a football ground, basketball and volleyball courts.</p>
                        </div>
                        <div className="info-section">
                            <h3>Research and Development</h3>
                            <p>CET strongly emphasizes research and development. Students and faculty conduct research projects in thrust areas of science and engineering. The institute has ongoing academic and research collaborations with governments and industries to keep pace with expanding frontiers of knowledge and global developments. The faculty and students at CET regularly publish their research findings in national and international journals, conferences, and symposiums. CET frequently organizes workshops, seminars, and conferences on contemporary research topics, bringing together experts from academia, industry, and government.</p>
                        </div>
                        <div className="info-section">
                            <h3>Student Life</h3>
                            <p>CET is mainly known for its vibrant student community, which infuses the campus with energy and enthusiasm. Various clubs and societies focusing on cultural, technical, and social activities contribute to this lively atmosphere. The College hosts several annual events, including "Drishti" (technical fest) and "Dhwani" (cultural fest). CET strongly emphasizes sports, with facilities for football, basketball, volleyball, cricket, badminton, and more. The College has an active student support wing that represents the student body, organizes events, and addresses student concerns..</p>
                        </div>
                        <div className="info-section">
                            <h3>Location and Accessibility</h3>
                            <p>The College of Engineering Trivandrum (CET) is conveniently located in Sreekariyam, Thiruvananthapuram, Kerala. The Trivandrum International Airport is approximately 11 kilometres away and takes around 25-30 minutes by car. The Trivandrum Central Railway Station is even closer, about 10 kilometres from the campus, and takes roughly 20-25 minutes by car. This proximity to significant transport hubs ensures that CET is easily accessible for students, faculty, and visitors.</p>
                        </div>
                    </div>
                    <a href="https://cet.ac.in/"><h4>Visit the main site</h4></a>
                </div>
            </main>
        </div>
    );
}

export default AboutCollege;