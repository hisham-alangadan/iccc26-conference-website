import React from 'react';
import './styles/KeynoteSpeakers.css';

const speakers = [
  {
    name: "Dr. Deepak Mishra",
    title: "Professor and Head, Department of Avionics, Indian Institute of Space Science and Technology (IIST), Trivandrum, India",
    bio: `Dr. Deepak Mishra is a distinguished academic and researcher, currently serving as the Professor and Head of the Department of Avionics at the Indian Institute of Space Science and Technology (IIST), Trivandrum, India. With a career spanning over a decade, Dr. Mishra has made significant contributions to the fields of machine learning, computer vision, image processing, and deep learning, becoming a recognized leader in these domains.

Dr. Mishra’s academic journey includes a Postdoctoral Fellowship at the Health Science Center, University of Louisville, USA (2007-2009), where he advanced his expertise in signal processing and computational neuroscience. He holds a Ph.D. in Electrical Engineering from the prestigious Indian Institute of Technology Kanpur (IIT Kanpur), where his research focused on cutting-edge computational methods.

His work, published in high-impact journals and conferences, covers a wide range of topics including deep learning applications, multi-object tracking, and image fusion, with significant contributions to real-time system development, medical image processing, and remote sensing. Dr. Mishra is also a sought-after expert in the application of machine learning techniques for complex real-world challenges, particularly in the domains of space technology and avionics.

Dr. Mishra has collaborated on several high-profile, funded projects with institutions like ISRO, focusing on satellite image analysis, disaster simulation, and the development of advanced systems for space technology. His leadership in these projects and his robust publication record underscore his role as a pioneer in integrating advanced computational methods with space applications`
  }
];

const TutorialSpeakers: React.FC = () => {
  return (
    <div className="keynote-speakers-container">
      <h1>Tutorial Speakers</h1>
      
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card" id={`speaker${index}`}>
            <div className="speaker-info">
              <h2><strong>{speaker.name}</strong></h2>
              <h3><strong>{speaker.title}</strong></h3>
              <p className="speaker-bio tut-speaker-bio">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorialSpeakers;