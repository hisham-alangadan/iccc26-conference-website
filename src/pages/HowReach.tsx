import Navbar from "../components/navbar";

const HowReach = () => {
    return (
        <>
        <Navbar/>
        <div style={{ "padding": "10vh 5vw" }}>
            <h2>Getting to campus</h2>
            <table>
                <tr>
                    <td>Closest airport</td>
                    <td>Trivandrum International Airport (TRV)</td>
                </tr>
                <tr>
                    <td>Closest railway stations</td>
                    <td>Thiruvanantapuram Central (TVC)<br />Thiruvanantapuram North/Kochuveli (KCVL)<br />Kazhakkoottam (KTKM)</td>
                </tr>
            </table>
        </div>
        </>
    );
};

export default HowReach;