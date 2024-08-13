import "./styles/localStuff.css";

const LocalStuffComponent = () => {
    return (
        <div className="local-stuff-container">
            <h2>Things to do in the city</h2>
            <p>Thiruvanantapuram is an exciting city, blessed with both natural beauty and unique heritage.</p>
            <div className="places">
                <div className="destination">Kovalam</div>
                <div className="destination">Varkala</div>
                <div className="destination">Shankhumukham</div>
            </div>
            <div className="places">
                <div className="destination">Ponmudi</div>
                <div className="destination">Agasthyamalai</div>
                <div className="destination">Napier Museum</div>
            </div>
            <div className="places">
                <div className="destination">Thiruvanantapuram Zoo</div>
                <div className="destination">Kuthiramalika Palace</div>
                <div className="destination"></div>
            </div>
        </div>
    );
};

export default LocalStuffComponent;