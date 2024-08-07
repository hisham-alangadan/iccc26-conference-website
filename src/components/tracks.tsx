import "../components/styles/tracks.css"

const TracksComponent = () => {
    return (
        <div className="tracks-container">
            <h1> Technical tracks at ICCC 2025 </h1>
            <p>Technical papers are solicited on the topics pertaining to the scope of the Conference will include, but are not limited to the following.</p>
            <div className="tracks-box">
                <div>
                    <table>
                        <header> Track 1 </header>
                        <tr>Control Theory and Applications</tr>
                        <tr>Intelligent Autonomous Systems</tr>
                        <tr>Architectures for Intelligent Control</tr>
                        <tr>Networked Control Systems</tr>
                        <tr>Automotive Control Systems</tr>
                        <tr>Industrial Process Control & Automation</tr>
                        <tr>Manufacturing Systems Control</tr>
                        <tr>Control of Constrained Systems</tr>
                        <tr>Power System Operation and Control</tr>Control of Electric Drives
                        <tr>Robotics and Aerospace Applications</tr>
                        <tr>Renewable Energy and Smart Grid</tr>
                        <tr>Navigation, Guidance and Control</tr>
                    </table>
                </div>
                <div>
                    <table>
                        <header>
                            Track 2
                        </header>
                        <tr>                        Wireless Communication and Sensor Networks</tr>
                        <tr>                        RF and Microwave Systems</tr>
                        <tr>                        Automation Robotics and Control</tr>
                        <tr>                        Power Electronics and Instrumentation</tr>
                        <tr>                        Signal Processing</tr>
                        <tr>                        MEMS/NEMS</tr>
                        <tr>                        Optoelectronics and Lightwave Systems</tr>
                        <tr>                        VLSI and Embedded Systems</tr>
                        <tr>                        Biomedical Engineering</tr>
                        <tr>                        Reliability Engineering</tr>
                        <tr>                        Network Systems and Protocols</tr>
                        <tr>                        Nanoelectronics</tr>
                        <tr>Computer Networks</tr>

                    </table>
                </div>
                <div>
                    <table>
                        <header>
                            Track 3
                        </header>
<tr>                        Parallel and Distributed Computing</tr>
<tr>Advanced Algorithms</tr>
<tr>Computational Geometry and Computer Graphics</tr>
<tr>Software Engineering and Formal Methods</tr>
<tr>Data Mining and Information Retrieval</tr>
<tr>Security and Privacy</tr>
<tr>System Software Design and Implementation</tr>
<tr>Natural Language Processing</tr>
<tr>Block Chain Technologies</tr>
<tr>Machine Learning</tr>
<tr>Cloud Computing and IoT</tr>
<tr>Digital Image Processing and Computer Vision</tr>
<tr>Cyber Physical Systems</tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default TracksComponent;