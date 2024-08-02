import './styles/city.css';
// import padmanabhaswamy from ;

const CityHelp = () => {
  return (
    <div className="cityHelpContainer">
        {/* <div className="cityTint"> */}
        <div className="cityHelpText">
            <p style={{"fontSize": "2em", "color": "blue"}}> Need help? </p>
            <p> Feel free to contact one of our student <br/> coordinators
            for advice on your stay, commute and <br/> sightseeing.</p>
            <table>
                <tr>
                    <td>ABC DEF</td>
                    <td>1234 5678 9 </td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>GHI JKL</td>
                    <td>123 456 789 </td>
                    <td>EEE</td>
                </tr>
                <tr>
                    <td>MNO PQR</td>
                    <td>123 456 7891</td>
                    <td>ECE</td>
                </tr>
            </table>
        </div>
        {/* </div> */}
    </div>
  );
}

export default CityHelp;