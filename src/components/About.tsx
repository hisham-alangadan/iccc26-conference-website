import aboutCET from '../assets/aboutCET.jpg';
import './styles/about.css';
const AboutCollege = () => {
    return (
        <div className="AboutUs-container">
            <main className="About-content">
                <h1>About the college</h1>
                <p><strong>The College of Engineering, Trivandrum (CET),</strong> established in 1939, stands as a beacon of excellence in technical education. For 85 years, CET has been at the forefront of engineering education in India, consistently producing top-tier professionals and innovative research.</p>
                <p>Our institution's rich history is matched only by its commitment to the future. From its humble beginnings as the first engineering college in the state of Kerala, CET has grown into a prestigious institution recognized nationwide for its academic rigor and research contributions.</p>
                <h2>Vision and Mission</h2>
                <p><strong>Vision: </strong>To be a center of excellence in technical education upholding social values.</p>
                <p><strong>Mission: </strong>To impart quality education to develop innovative, technically competent, and ethically sound professionals capable of meeting global challenges.</p>
                <a href="https://cet.ac.in/"><h3> Visit the main site </h3></a>
            </main>
            <div className="image-container">
                <img src={aboutCET} alt="College photo" className="college-pic" />
                <div className="rectangle-bottom"></div>
                <div className="rectangle-left"></div>
            </div>
        </div>
    );
}
  
export default AboutCollege;