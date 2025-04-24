import './styles/eventdetailscomponent.css'

export default function EventDetailsComponent() {
    const hotels = [
        {
            name: "CASA in Luxury Suites",
            address: "Chirakkulam Rd, Statue,\nPalayam, Thiruvananthapuram,\nKerala 695001",
            contact: "7510710000",
            website: "https://casainsuites.com/"
        },
        {
            name: "Ginger Trivandrum",
            address: "Club House, Electronics Technology Park,\nTechnopark Campus,\nTrivandrum, Kerala 695581",
            contact: "0471 666 3333",
            website: "https://www.gingerhotels.com/ginger-trivandrum-kerala"
        },
        {
            name: "KTDC Grand Chaithram",
            address: "Railway Station Rd,\nNear Railway Station,\nOverbridge, Thiruvananthapuram,\nKerala 695001",
            contact: "0471 233 0977",
            website: "https://www.ktdc.com/grandchaithram"
        },
        {
            name: "Treebo Park Hotel",
            address: "CH Centre, Chalakuzhy Rd,\nnear medical Chalakuzhy,\nPattom, Thiruvananthapuram,\nKerala 695004",
            contact: "093228 00100",
            website: "https://www.treebo.com/hotels-in-thiruvananthapuram/treebo-park-hotel-pattom-2158"
        }
    ];

    return (
        <div className="paper-submission-container">
            <h1>Nearby Hotels</h1>
            <div className="table-responsive">
                <table className="instructions-table">
                    <thead>
                        <tr className="head">
                            <th>Hotel Name</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((hotel, index) => (
                            <tr key={index}>
                                <td>{hotel.name}</td>
                                <td style={{ whiteSpace: 'pre-line' }}>{hotel.address}</td>
                                <td>{hotel.contact}</td>
                                <td><a href={hotel.website} target="_blank" rel="noopener noreferrer">{hotel.website}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
