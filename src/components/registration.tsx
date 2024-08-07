import "./styles/registration.css"

const RegistrationComponent = () => {
    return (
        <div className="registration-container">
            <h2>Registration Guidelines</h2>
            <p>At least one of the authors of each accepted paper must register for the conference for the paper to be included in the conference proceedings and published through IEEE Xplore. Registration fee covers conference proceedings, conference kit, coffee breaks, working lunch and banquet dinner.</p>
            <p>Full registration includes the registration of one paper. Additional papers for a single registration come with an additional fee. The maximum length of the paper is 6 pages including references.</p>
            <p>Accepted and presented papers of ICCC 2025 will be submitted for possible publication in the IEEE Xplore® Digital Library.</p>

            <h3>Registration Fee</h3>
            <table>
                <tr>
                    <th>Category</th>
                    <th>IEEE Members (INR)</th>
                    <th>IEEE Members (USD)</th>
                    <th>Non-IEEE Members (INR)</th>
                    <th>Non-IEEE Members (USD)</th>
                </tr>
                <tr>
                    <td>Conference Only (Professionals)</td>
                    <td>6500</td>
                    <td>200</td>
                    <td>7500</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Conference Only (Students)</td>
                    <td>5500</td>
                    <td>150</td>
                    <td>6500</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Tutorial Only (Professionals)</td>
                    <td>1000</td>
                    <td>50</td>
                    <td>1500</td>
                    <td>75</td>
                </tr>
                <tr>
                    <td>Tutorial Only (Students)</td>
                    <td>750</td>
                    <td>40</td>
                    <td>1000</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Conference + Tutorial (Professionals)</td>
                    <td>7000</td>
                    <td>225</td>
                    <td>8000</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>Conference + Tutorial (Students)</td>
                    <td>6500</td>
                    <td>175</td>
                    <td>6750</td>
                    <td>225</td>
                </tr>
                <tr>
                    <td>Indian Non-Author Attendee (Professionals)</td>
                    <td>4000</td>
                    <td>-</td>
                    <td>4500</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Indian Non-Author Attendee (Students)</td>
                    <td>3000</td>
                    <td>-</td>
                    <td>3500</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Additional Rate per Paper</td>
                    <td>2000</td>
                    <td>50</td>
                    <td>2000</td>
                    <td>50</td>
                </tr>
            </table>
            <p>Indian delegates, GST inclusive; Foreign delegates</p>
        </div>
    );
};

export default RegistrationComponent;