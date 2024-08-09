import Navbar from "../components/navbar";

const LocalStuff = () => {return (
    <>
        <Navbar />
        <div style={{ "padding": "10vh 5vw" }}>
            <h2> Local Attractions </h2>
            <p> Thiruvanantapuram is a city with a rich past and oustanding natural beauty. </p>
            <h3> Beaches nearby </h3>
            <ul>
                <li>Kovalam</li>
                <li>Varkala</li>
                <li>Shankhumukham</li>
            </ul>
            <h3>Hill stations and parks</h3>
            <ul>
                <li>Ponmudi</li>
                <li>Agasthyamalai</li>
            </ul>
            <h3>One-day visits in the city</h3>
            <ul>
                <li>Napier Museum</li>
                <li>Kuthiramalika Palace</li>
                <li>Thiruvanantapuram Zoo</li>
            </ul>
        </div>
    </>
);}

export default LocalStuff;