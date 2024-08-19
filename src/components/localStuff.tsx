import "./styles/localStuff.css";

const LocalStuffComponent = () => {
    return (
        <div className="local-stuff-container">
            <h2>LOCAL ATTRACTIONS IN THE CITY</h2>
            <p>Trivandrum, officially known as Thiruvananthapuram, is the capital of Kerala, India, renowned for its rich cultural heritage and historical significance. The city is home to the famous Padmanabhaswamy Temple, a symbol of architectural brilliance and immense wealth. It houses significant institutions like the Vikram Sarabhai Space Centre (VSSC) and Technopark, one of India's largest IT hubs. Trivandrum is known for its natural beauty, with attractions like Kovalam Beach, Ponmudi hill station, and Neyyar Wildlife Sanctuary. The city enjoys a tropical monsoon climate characterised by hot, humid weather and heavy monsoon rains. Well-connected by Trivandrum International Airport and a robust rail and road network, the city is a vibrant blend of tradition and modernity.</p>
            <div className="places">
                <div className="destination" style={{ backgroundImage: "url('https://www.keralatourism.org/images/destination/large/kovalam20131031105847_236_1.jpg')" }}>
                    <a href="https://www.keralatourism.org/destination/kovalam-beach/236">Kovalam</a>
                </div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/microsites/varkala/inner-banner.jpg')"}}><a href="https://www.keralatourism.org/varkala">Varkala</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/shankhumugham_beach_thiruvananthapuram20131031115511_224_1.jpg')"}}><a href="https://www.keralatourism.org/destination/shankhumugham-beach-thiruvananthapuram/224">Shankhumukham</a></div>
            </div>
            <div className="places">
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/ponmudi_hill_station_thiruvananthapuram20131108135356_243_3.jpg')"}}><a href="https://www.keralatourism.org/destination/ponmudi-hills/243">Ponmudi</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/sree_padmanabhaswamy_temple_thiruvananthapuram20131031115717_13_1.jpg')"}}><a href="https://www.keralatourism.org/destination/padmanabha-swamy-temple-thiruvananthapuram/13">Sree Padmanabhaswamy Temple</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/jatayu_adventure_centre20180919110817_262_1.jpg')", "objectFit":"cover", "objectPosition":"bottom"}}><a href="https://www.keralatourism.org/destination/jatayupara-chadayamangalam/262">Jatayu Adventure Center</a></div>
            </div>
            <div className="places">
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/the_zoological_park_thiruvananthapuram20131115172928_90_1.jpg')"}}><a href="https://www.keralatourism.org/destination/zoological-park-thiruvananthapuram/90">Thiruvanantapuram Zoo</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/kuthiramalika_palace_museum_at_east_fort20131031110636_58_1.jpg')"}}><a href="https://www.keralatourism.org/destination/kuthiramalika-palace-east-fort/58">Kuthiramalika Palace</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/napier_museum_thiruvananthapuram20131115173306_327_1.jpg')"}}><a href="https://www.keralatourism.org/destination/napier-museum-thiruvananthapuram/327">Napier Museum</a></div>
            </div>
        </div>
    );
};

export default LocalStuffComponent;