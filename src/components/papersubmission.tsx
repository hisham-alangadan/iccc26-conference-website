import "./styles/papersubmission.css"

const PaperSubmissionComponent = () => {
    return (
        <div className="paper-submission-container">
            <h1> Guidelines for Paper Submission </h1>
            <div className="gridlike">
                <div className="instructions">
                    <h2>Instructions</h2>
                    <ol>
                        <li>Use only <a href="https://www.ieee.org/conferences/publishing/templates.html">IEEE standard two column conference paper template</a>(https://www.ieee.org/conferences/publishing/templates.html).</li>
                        <li>The maximum length of the paper for review is 6 pages including references. The maximum File Size allowed is 10 MB in PDF format without encryption and/or passwords.</li>
                        <li>Papers having poor quality and/or high similarity index will be desk rejected (without review).</li>
                    </ol>
                </div>
                <div className="instructions instructions-table">
                    <h2>Important Deadlines for Authors</h2>
                    <table>
                        <tr className="head">
                            <th>Event</th>
                            <th>Date</th>
                        </tr>
                        <tr className="highlighted">
                            <td>Paper Submission Opening Date</td>
                            <td>1<sup>st</sup> Sep 2024</td>
                        </tr>
                        <tr>
                            <td>Paper Submission Due Date</td>
                            <td>30<sup>th</sup> Nov 2024</td>
                        </tr>
                        <tr>
                            <td>Notification of Acceptance</td>
                            <td>15<sup>th</sup> Jan 2025</td>
                        </tr>
                        <tr>
                            <td>Registration Starts</td>
                            <td>15<sup>th</sup> Jan 2025</td>
                        </tr>
                        <tr>
                            <td>Final Camera-ready Paper</td>
                            <td>30<sup>th</sup> March 2025</td>
                        </tr>
                        <tr>
                            <td>Date of Conference</td>
                            <td>23<sup>rd</sup> - 25<sup>th</sup> May 2025</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="paper-upload">
                <br /> <br />
                <h2>Procedure for Uploading Papers</h2>
                <ol>
                    <li>Go to the paper submission website: <a href="https://cmt3.research.microsoft.com">https://cmt3.research.microsoft.com</a></li>
                    <li>You will see a dialog box below with the ICCC 2025 emblem on the page. If you are new to the system, please choose "Register" at the bottom of the dialog box</li>
                    <li>Follow the wizard to finish the registration. Upon finishing, you'll have an account in the system with user ID and Password.</li>
                    <li>Again, log into the system using your login account info (email address and password). From the drop down menu, select the track to which you want to send the papers. It is the responsibility of the author to send his/her paper to the most appropriate track. Otherwise it may be difficult to get proper review of the papers. Make sure that you are submitting the paper to only one track. Otherwise, your paper will be rejected.</li>
                    <li>Fill out the submission form: "Title", "Abstract", and "Authors" and enter email ID and details of all the co-authors (Name, Designation, Institute and the Country to which your institute is affiliated etc.) and "Submit" your paper.</li>
                    <li>After successful submission, a confirmation email will be sent to all authors by the Microsoft CMT system.</li>
                </ol>
            </div>
        </div>
    );
};

export default PaperSubmissionComponent;