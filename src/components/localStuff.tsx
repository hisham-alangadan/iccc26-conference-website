import "./styles/localStuff.css";

const LocalStuffComponent = () => {
    return (
        <div className="local-stuff-container">
            <h2>Things to do in the city</h2>
            <p>Thiruvanantapuram is an exciting city, blessed with both natural beauty and unique heritage.</p>
            <div className="places">
                <div className="destination" style={{ backgroundImage: "url('https://www.keralatourism.org/images/destination/large/kovalam20131031105847_236_1.jpg')" }}>
                    <a href="https://www.keralatourism.org/destination/kovalam-beach/236">Kovalam</a>
                </div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/microsites/varkala/inner-banner.jpg')"}}><a href="https://www.keralatourism.org/varkala">Varkala</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/arattu_mandapam_shanghumugham20180629152321_599_1.jpg')"}}><a href="https://www.keralatourism.org/destination/shankhumugham-beach-thiruvananthapuram/224">Shankhumukham</a></div>
            </div>
            <div className="places">
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/ponmudi_hill_station_thiruvananthapuram20131108135356_243_3.jpg')"}}><a href="https://www.keralatourism.org/destination/ponmudi-hills/243">Ponmudi</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/agasthyakoodam20131114155513_245_1.jpg')"}}><a href="https://www.keralatourism.org/destination/agasthyakoodam-western-ghats/245">Agasthyamalai</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/napier_museum_thiruvananthapuram20131115173306_327_1.jpg')"}}><a href="https://www.keralatourism.org/destination/napier-museum-thiruvananthapuram/327">Napier Museum</a></div>
            </div>
            <div className="places">
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/the_zoological_park_thiruvananthapuram20131115172928_90_1.jpg')"}}><a href="https://www.keralatourism.org/destination/zoological-park-thiruvananthapuram/90">Thiruvanantapuram Zoo</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/kuthiramalika_palace_museum_at_east_fort20131031110636_58_1.jpg')"}}><a href="https://www.keralatourism.org/destination/kuthiramalika-palace-east-fort/58">Kuthiramalika Palace</a></div>
                <div className="destination" style={{"backgroundImage": "url('https://www.keralatourism.org/images/destination/large/kerala_biodiversity_museum_thiruvananthapuram20200622082413_670_1.jpg')"}}><a href="https://www.keralatourism.org/destination/kerala-biodiversity-museum/670">Biodiversity Museum</a></div>
            </div>
        </div>
    );
};

export default LocalStuffComponent;