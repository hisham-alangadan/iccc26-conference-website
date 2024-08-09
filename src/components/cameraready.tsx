import "./styles/cameraready.css"

const CameraReadyComponent = () => {
    return (
        <div className="cameraready-container">
            <h2 className="navy">Camera Ready Paper Submission Instructions</h2>
            <p>Camera Ready Paper Submission Deadline: March 30, 2025.</p>
            <p>For camera ready submission, no change in title of the paper and authors are allowed.</p>

            <h3>Step 1: Final Camera Ready Paper and Reviewer Response Preparation</h3>
            <ol>
                <li>Please follow IEEE two column A4 size standard conference format for preparing your final manuscript. For more details please visit: <a href="https://www.ieee.org/conferences/publishing/templates.html">IEEE Templates page</a>.</li>
                <li>Revised Version: Revise your paper based on reviewers' comments/suggestions (if any). The reviewer's comments are available in the same Microsoft Conference Management Toolkit (CMT) site.</li>
                <li>The maximum page limit is six pages including references. No author biography at the end.</li>
                <li>Similarity with other papers should be low (a similarity index below 30% is acceptable for publication). Maximum File Size allowed is 3 MB and the file format is Adobe PDF (.pdf) without any encryption and/or passwords.</li>
                <li>The authors are expected to make sure that the comments of the reviewers/meta-reviewers have been addressed in the final manuscript.</li>
                <li>A separate file for the response of reviewer comments needs to be uploaded in Microsoft CMT.</li>
                <li>Naming of files - Example if Paper ID is 1:
                    <ul>
                        <li>Camera ready paper: PID_001</li>
                        <li>Reviewer Response: Review Response_001</li>
                    </ul>
                </li>
                <li>The final manuscript should have the copyright clearance code notice at the bottom of the first page in latex/word template provided here: <a href="https://www.ieee.org/conferences/publishing/templates.html">IEEE Templates page</a>, replace the dummy code (XXX-X-XXXX-XXXX-X/XX/$XX.00 ©20XX IEEE) at the footnote of the first page in bottom with this code:</li>
            </ol>

            <h3>Step 2: PDF eXpress Check</h3>
            <p>After you have appropriately revised your paper, pass your revised paper through PDF eXpress using conference ID (57789X) by going to the URL <a href="https://www.pdf-express.org">PDF eXpress</a>. If you do not have an account in PDF eXpress, click on the link "New Users - Click here" and fill in your information (email address and password). If you are not familiar with PDF eXpress you can get detailed instructions on using IEEE PDF eXpress at: <a href="https://www.pdf-express.org/frhelpnologin.asp">PDF eXpress Help</a>.</p>

            <h3>Step 3: Paper Submission</h3>
            <p>Submit the final version of the paper (after passing it through PDF eXpress check) through the author console in CMT. Please change the file name of the PDF eXpress checked camera ready paper to PID_xxx (where xxx is your paper ID in CMT) before submission to CMT. Please note that authors are expected to retain the title of the original paper in the final paper. Also, the author list in the original paper cannot be changed in the final manuscript.</p>

            <h3>Step 4: Submission of the Copyright Form</h3>
            <p>After uploading the final camera ready paper (the paper must have passed PDF Check in IEEE PDF eXpress), click on 'Submit IEEE Copyright Form' link to enter the IEEE Copyright Form Submission CMT page. Click on the IEEE copyright website link. Now, the author will be redirected to IEEE eCF site to submit the copyright form. After filling out the IEEE copyright form and copyright agreements, there is an option to download the completed IEEE Copyright Form in PDF (The corresponding author would have received the copyright form through email also). Please upload it (or 'drop files here' menu) on the same page in CMT. Please note that the corresponding author can submit the copyright form for all the authors.</p>

            <h3>Step 5: Conference Registration</h3>
            <p>A full conference registration is mandatory to have the paper included in the conference program and the proceedings. Registration portal will be opened soon. Please check the website regularly for updates.</p>
        </div>
    );
};

export default CameraReadyComponent;