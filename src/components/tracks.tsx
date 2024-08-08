import "../components/styles/tracks.css"

const TracksComponent = () => {
    return (
        <div className="tracks-container">
            <h1> Technical Tracks at ICCC 2025 </h1>
            <p>Technical papers are solicited on the topics pertaining to the scope of the Conference will include, but are not limited to the following.</p>
            <div className="tracks-box">
                <div>
                    <table>
                        <header> Track 1 </header>
                        <ul>
                            <li>Control Theory and Applications</li>
                            <li>Intelligent Autonomous Systems</li>
                            <li>Architectures for Intelligent Control</li>
                            <li>Networked Control Systems</li>
                            <li>Automotive Control Systems</li>
                            <li>Industrial Process Control & Automation</li>
                            <li>Manufacturing Systems Control</li>
                            <li>Control of Constrained Systems</li>
                            <li>Power System Operation and Control</li>
                            <li>Control of Electric Drives</li>
                            <li>Robotics and Aerospace Applications</li>
                            <li>Renewable Energy and Smart Grid</li>
                            <li>Navigation, Guidance and Control</li>
                        </ul>
                    </table>
                </div>
                <div>
                    <table>
                        <header>
                            Track 2
                        </header>
                        <ul>
                            <li>Wireless Communication and Sensor Networks</li>
                            <li>RF and Microwave Systems</li>
                            <li>Automation Robotics and Control</li>
                            <li>Power Electronics and Instrumentation</li>
                            <li>Signal Processing</li>
                            <li>MEMS/NEMS</li>
                            <li>Optoelectronics and Lightwave Systems</li>
                            <li>VLSI and Embedded Systems</li>
                            <li>Biomedical Engineering</li>
                            <li>Reliability Engineering</li>
                            <li>Network Systems and Protocols</li>
                            <li>Nanoelectronics</li>
                            <li>Computer Networks</li>
                        </ul>
                    </table>
                </div>
                <div>
                    <table>
                        <header>
                            Track 3
                        </header>
                        <ul>
                            <li>Parallel and Distributed Computing</li>
                            <li>Advanced Algorithms</li>
                            <li>Computational Geometry and Computer Graphics</li>
                            <li>Software Engineering and Formal Methods</li>
                            <li>Data Mining and Information Retrieval</li>
                            <li>Security and Privacy</li>
                            <li>System Software Design and Implementation</li>
                            <li>Natural Language Processing</li>
                            <li>Block Chain Technologies</li>
                            <li>Machine Learning</li>
                            <li>Cloud Computing and IoT</li>
                            <li>Digital Image Processing and Computer Vision</li>
                            <li>Cyber Physical Systems</li>
                        </ul>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default TracksComponent;