import "./styles/cameraready.css";

const CameraReadyComponent = () => {
    return (
        <div className="cameraready-container">
            <h2 className="navy">CAMERA-READY PAPER SUBMISSION GUIDELINES</h2>
            <p>The authors need to submit the following files in the Camera-Ready Submission section:</p>
            <ol>
                <li>Camera-Ready Paper (Paper must be renamed with PID_paper ID. Example: Paper ID 1 → PID_001)</li>
                <li>Reviewer Response (Paper must be renamed with ReviewResponse_paper ID. Example: Paper ID 1 → ReviewResponse_001)</li>
            </ol>

            <p>At least one author must register and present the selected paper at ICCC 2025 for the paper to be considered for inclusion in IEEE Xplore. Registration link: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdF6fYmjisCrN3LkX96UskaDnbTOCe8yZHoViM8fiiDBHTxQ/viewform?usp=dialog">ICCC 2025 Registration</a></p>

            <h3>Camera-Ready Submission Instructions</h3>
            <p>Authors must submit the camera-ready version as per the guidelines given on the conference website and below, on or before April 05, 2025. The last date for registration is April 10, 2025.</p>
            <p>For any queries, contact Dr. Jerrin Thomas Panachakel at <a href="mailto:jerrin.panachakel@cet.ac.in">jerrin.panachakel@cet.ac.in</a>.</p>

            <h3>Before submitting the camera-ready paper, ensure that:</h3>
            <ul>
                <li>The manuscript has plagiarism below 30%, checked using standard plagiarism detection software.</li>
                <li>Reviewers' comments have been incorporated into the revised submission.</li>
                <li>The camera-ready submission strictly follows the IEEE Template available at <a href="https://www.ieee.org/conferences/publishing/templates.html">IEEE Templates</a>.</li>
                <li>The Final Camera-Ready Paper must be within six pages. Papers not meeting these requirements will not be submitted to IEEE Xplore.</li>
                <li>The final manuscript must include the copyright clearance code notice at the bottom of the first page. Replace the default copyright code with the appropriate one:</li>
            </ul>

            <h4>Copyright Clearance Code</h4>
            <ul>
                <li>For papers in which all authors are employed by the US government, the copyright notice is: <b>U.S. Government work not protected by U.S. copyright</b></li>
                <li>For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: <b>979-8-3315-1949-0/25/$31.00 ©2025 Crown</b></li>
                <li>For papers in which all authors are employed by the European Union, the copyright notice is: <b>979-8-3315-1949-0/25/$31.00 ©2025 European Union</b></li>
                <li>For all other papers the copyright notice is: <b>979-8-3315-1949-0/25/$31.00 ©2025 IEEE</b></li>
            </ul>

            <p>Authors must format their Camera-Ready Paper using IEEE PDF eXpress and upload the IEEE-compliant PDF.</p>

            <h3>IEEE PDF eXpress Instructions</h3>
            <ul>
                <li>Login to <a href="https://ieee-pdf-express.org/">IEEE PDF eXpress</a>.</li>
                <li>First-time users:
                    <ul>
                        <li>Click <strong>New Users – Click Here</strong></li>
                        <li>Enter <strong>64910X</strong> as the Conference ID</li>
                        <li>Enter your email address and a password</li>
                        <li>Follow the prompts to complete the setup</li>
                    </ul>
                </li>
                <li>Returning users should use the same account from previous conferences. Verify your contact information is correct.</li>
                <li>Download the PDF-compliant file from IEEE PDF eXpress and upload it via the CMT Camera-Ready Paper Submission Portal: <a href="https://cmt3.research.microsoft.com/ICCCconf2025">CMT Submission Portal</a></li>
            </ul>

            <h3>IEEE Copyright Transfer Submission</h3>
            <p>To have your paper included in IEEE Xplore, the corresponding/submitting author must transfer the copyright to IEEE. The IEEE eCF (Electronic Copyright Form) submission is mandatory.</p>

            <h4>Steps to complete IEEE eCF submission:</h4>
            <ul>
                <li>Login to <a href="https://cmt3.research.microsoft.com/ICCCconf2025">CMT Paper Submission Portal</a></li>
                <li>Click on IEEE Copyright Link → Redirects to the IEEE Copyright Form Submission Page</li>
                <li>Click "Click here to redirect to the IEEE copyright website"</li>
                <li>Complete the steps (Step 1 to Step 5) to transfer copyright</li>
                <li>At the end of Step 5, download the completed IEEE Copyright Form (PDF)</li>
                <li>Upload this PDF file of the Copyright Form back to CMT</li>
                <li>This completes the IEEE Copyright Transfer. A separate copyright transfer is required for each accepted paper.</li>
            </ul>

            <h3>Important Formatting Instruction</h3>
            <p>Do not include "1st", "2nd", etc., with author names. These are placeholders from the IEEE template and should not appear in the final submission.</p>

            <p><strong>Failure to comply with the above instructions may result in rejection from IEEE Xplore.</strong></p>
        </div>
    );
};

export default CameraReadyComponent;