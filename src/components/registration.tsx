import "./styles/registration.css"

const RegistrationComponent = () => {
    return (
        <div className="registration-container">
            <h2 className="navy">Registration Guidelines</h2>
            <p>At least one of the authors of each accepted paper must register for the conference for the paper to be included in the conference proceedings and published through IEEE Xplore. Registration fee covers conference proceedings, conference kit, coffee breaks, working lunch and banquet dinner.</p>
            <p>Full registration includes the registration of one paper. Additional papers for a single registration come with an additional fee. The maximum length of the paper is 6 pages including references.</p>
            <p>Accepted and presented papers of ICCC 2025 will be submitted for possible publication in the IEEE Xplore® Digital Library.</p>

            <h3>Registration Fee</h3>
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2}>Registration fees</th>
                        <th colSpan={2}>Professionals</th>
                        <th colSpan={2}>Students</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th>IEEE Members</th>
                        <th>Non-IEEE Members</th>
                        <th>IEEE Members</th>
                        <th>Non-IEEE Members</th>
                    </tr>
                    <tr>
                        <td>Conference only</td>
                        <td>6500 INR* / 200 USD**</td>
                        <td>7500 INR* / 250 USD**</td>
                        <td>5500 INR* / 150 USD**</td>
                        <td>6500 INR* / 250 USD**</td>
                    </tr>
                    <tr>
                        <td>Tutorial only</td>
                        <td>1000 INR* / 50 USD**</td>
                        <td>1500 INR* / 75 USD**</td>
                        <td>750 INR* / 40 USD**</td>
                        <td>1000 INR* / 50 USD**</td>
                    </tr>
                    <tr>
                        <td>Conference + Tutorial</td>
                        <td>7000 INR* / 225 USD**</td>
                        <td>8000 INR* / 300 USD**</td>
                        <td>6500 INR* / 175 USD**</td>
                        <td>6750 INR* / 225 USD**</td>
                    </tr>
                    <tr>
                        <td>Indian non-author attendee</td>
                        <td>4000 INR*</td>
                        <td>4500 INR*</td>
                        <td>3000 INR*</td>
                        <td>3500 INR*</td>
                    </tr>
                    <tr>
                        <td>Additional rate/paper</td>
                        <td>2000 INR* / 50 USD**</td>
                        <td>2000 INR* / 50 USD**</td>
                        <td>2000 INR* / 50 USD**</td>
                        <td>2000 INR* / 50 USD**</td>
                    </tr>
                </tbody>
            </table>
            <p>*Indian delegates, GST inclusive | **Foreign delegates</p>
        </div>
    );
};

export default RegistrationComponent;
