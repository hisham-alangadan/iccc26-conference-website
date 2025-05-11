import React from "react";
import "./styles/KeynoteSpeakers.css";

const speakers = [
  {
    name: "Dr. Deepak Mishra",
    title:
      "Professor and Head, Department of Avionics, Indian Institute of Space Science and Technology (IIST), Trivandrum, India",
    datetime: "23rd May 2025 from 1:00 PM to 2:30 PM",
    topic: "Classical Control Theory – Application to Launch Vehicle",
    bio: `Dr. Deepak Mishra is a distinguished academic and researcher, currently serving as the Professor and Head of the Department of Avionics at the Indian Institute of Space Science and Technology (IIST), Trivandrum, India. With a career spanning over a decade, Dr. Mishra has made significant contributions to the fields of machine learning, computer vision, image processing, and deep learning, becoming a recognized leader in these domains.

Dr. Mishra’s academic journey includes a Postdoctoral Fellowship at the Health Science Center, University of Louisville, USA (2007-2009), where he advanced his expertise in signal processing and computational neuroscience. He holds a Ph.D. in Electrical Engineering from the prestigious Indian Institute of Technology Kanpur (IIT Kanpur), where his research focused on cutting-edge computational methods.

His work, published in high-impact journals and conferences, covers a wide range of topics including deep learning applications, multi-object tracking, and image fusion, with significant contributions to real-time system development, medical image processing, and remote sensing. Dr. Mishra is also a sought-after expert in the application of machine learning techniques for complex real-world challenges, particularly in the domains of space technology and avionics.

Dr. Mishra has collaborated on several high-profile, funded projects with institutions like ISRO, focusing on satellite image analysis, disaster simulation, and the development of advanced systems for space technology. His leadership in these projects and his robust publication record underscore his role as a pioneer in integrating advanced computational methods with space applications`,
  },
  {
    name: "Kapil Kumar Sharma",
    title: "Scientist, ISRO",
    datetime: "23rd May 2025 from 2:30 PM to 4:00 PM",
    topic:
      "The Transformer Revolution: Fundamentals and its application in signal processing, remote sensing and computer vision",
    bio: `Kapil Kumar Sharma is a distinguished scientist at the Indian Space Research Organisation (ISRO), where he has been contributing to advanced aerospace control systems since 2011. His expertise lies in Digital Autopilot Design for ISRO’s launch vehicles, ensuring precision and stability in space missions.

Kapil holds an M.Tech in Control & Automation from IIT Delhi (2010) and a B.Tech in Electronics & Instrumentation Engineering from MIET, UP Tech University (2008). His academic excellence is highlighted by his outstanding performance in the GATE examinations, securing AIR-20 (2007), AIR-69 (2008), and AIR-296 (2010).

With deep expertise in Robust and Adaptive Control as well as Multi-variable Control Systems, he plays a pivotal role in the development of guidance and control algorithms for India's space programs. His research interests encompass cutting-edge control strategies that enhance the efficiency and reliability of autonomous flight systems.

As a tutorial speaker at the conference, he will share his insights into advanced control methodologies, shedding light on their applications in aerospace engineering and launch vehicle technology. His session will be invaluable for researchers, engineers, and students keen on exploring high-performance control strategies for dynamic systems.`,
  },
];

const TutorialSpeakers: React.FC = () => {
  return (
    <div className="keynote-speakers-container">
      <h1>Tutorial Speakers</h1>

      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card" id={`speaker${index}`}>
            <div className="speaker-info">
              <h2>
                <strong>{speaker.name}</strong>
              </h2>
              <h3>
                <strong>{speaker.title}</strong>
              </h3>
              <p className="speaker-datetime">
                <strong>Date & Time:</strong> {speaker.datetime}
              </p>
              <p className="speaker-topic">
                <strong>Topic:</strong> {speaker.topic}
              </p>
              <p className="speaker-bio tut-speaker-bio">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialSpeakers;
