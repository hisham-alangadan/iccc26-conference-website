import "./styles/registration.css"

const RegistrationComponent = () => {
    return (
        <div className="registration-container">
            <h2 className="navy">REGISTRATION GUIDELINES</h2>
            <p>At least one of the authors of each accepted paper must register for the conference for the paper to be included in the conference proceedings and published through IEEE Xplore. Registration fee covers conference proceedings, conference kit, coffee breaks, working lunch and banquet dinner.<br /> <br />
            A full registration covers the registration of one paper. You may register an additional paper for a fee of ₹2,000 or $50. Please note that while the additional paper will be included in the conference proceedings and presentation certificates will be issued, it will not be submitted to IEEE Xplore for possible publication. Only papers associated with a full author registration will be eligible for possible publication in IEEE Xplore.<br /> <br />
            The maximum length of the paper is 6 pages including references. A fee of ₹1,000 or $25 will be applied for each additional page (with a maximum of 2 pages).<br /> <br />
            Accepted and presented papers of ICCC 2025 will be submitted for possible publication in the IEEE Xplore® Digital Library.<br /> <br />
            <span className="reg-ends-date">Registration ends on 5th April 2025</span></p>

            <h3>Registration Payment Link</h3>
            <p>Please pay the registration fee through the payment link: <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?saralID=-911830842">Payment Link</a></p>

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
                        <td>6500 INR* / 200 USD**</td>
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
                        <td>6500 INR* / 200 USD**</td>
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
