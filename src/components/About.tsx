import aboutCET from '../assets/aboutCET.jpg';
import './styles/about.css';
const AboutCollege = () => {
    return (
        <div className="AboutUs-container">
            <main className="About-content">
                <div className="panel">
                    <div>
                        <h1>About the college</h1>
                        <p><strong>The College of Engineering, Trivandrum (CET),</strong> established in 1939, stands as a beacon of excellence in technical education. </p>
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
                <a href="https://cet.ac.in/"><h4>Visit the main site</h4></a>
            </main>
        </div>
    );
}

export default AboutCollege;