import "../components/styles/tracks.css"

const TracksComponent = () => {
    return (
        <div className="tracks-container" id="top">
            <h1><strong> Technical Tracks at ICCC 2025 </strong></h1>
            <p><em><strong>Technical papers are solicited on the topics pertaining to the scope of the Conference will include, but are not limited to the following.</strong></em></p>
            <div className="tracks-box">
                <div>
                    <table className="table-1">
                        <header> Track 1 </header>
                        <ul><strong>
                            <li>Architectures for Intelligent Control</li>
                            <li>Automotive Control Systems</li>
                            <li>Control of Aerospace Systems</li>
                            <li>Control of Constrained Systems</li>
                            <li>Control Theory and Applications</li>
                            <li>Industrial Process Control & Automation</li>
                            <li>Intelligent Autonomous Systems</li>
                            <li>Manufacturing Systems Control</li>
                            <li>Navigation, Guidance and Control</li>
                            <li>Networked Control Systems</li>
                            <li>Power Electronics and Drives</li>
                            <li>Power System Operation and Control</li>
                            <li>Renewable Energy and Smart Grid</li>
                            <li>Transportation Electrification</li>
                        </strong></ul>
                    </table>
                </div>
                <div>
                    <table className="table-2">
                        <header> Track 2 </header>
                        <ul><strong>
                        <li> Acoustic and Audio Signal Processing </li>
                            <li> Biomedical Signal Processing </li>
                            <li> Instrumentation and Control </li>
                            <li> MEMS/NEMS </li>
                            <li> Nanoelectronics </li>
                            <li> Network Systems and Protocols </li>
                            <li> Optoelectronics and Lightwave Systems </li>
                            <li> RF and Microwave Systems </li>
                            <li> Reliability Engineering </li>
                            <li> Robotics and Automation </li>
                            <li> Signal Processing for Communications and Networking </li>
                            <li> Two-dimensional Signal Processing and Video Analytics  </li>
                            <li> VLSI and Embedded Systems </li>
                            <li> Wireless Communication and Sensor Networks </li>
                        </strong></ul>
                    </table>
                </div>
                <div>
                    <table className="table-3">
                        <header> Track 3 </header>
                        <ul><strong>
                        <li> Advanced Algorithms </li>
                            <li> Big Data Analysis, Cloud Computing and IoT </li>
                            <li> Blockchain Technologies </li>
                            <li> Computational Geometry and Computer Graphics </li>
                            <li> Computer Networks </li>
                            <li> Cyber Physical Systems </li>
                            <li> Data Mining and Information Retrieval </li>
                            <li> Data Science, Artificial Intelligence and Machine Learning </li>
                            <li> Digital Image Processing and Computer Vision </li>
                            <li> Natural Language Processing </li>
                            <li> Parallel and Distributed Computing </li>
                            <li> Security and Privacy </li>
                            <li> Software Engineering and Formal Methods </li>
                            <li> System Software Design and Implementation </li>
                        </strong></ul>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TracksComponent;