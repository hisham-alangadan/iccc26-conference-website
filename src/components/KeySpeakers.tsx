import React from "react";
import "./styles/KeynoteSpeakers.css";
// import DrTessy from "../assets/DrTessy.png";
import DrSaji from "../assets/DrSaji_cropped.png";
import DrSugiyama from "../assets/sugiyama.jpg";
import uprajeev from "../assets/uprajeev.jpg";

const speakers = [
  {
    name: "Dr. Akihiko Sugiyama",
    title: "Senior Researcher, Yahoo JAPAN, IEEE Fellow",
    image: DrSugiyama, // Replace with actual image when available
    datetime: "24th May 2025, 10:30 AM - 11:30 AM",
    topic: "In Search of a Better Solution with a Technology Logic Triangle and the Toyota Production System",
    bio: `Dr. Sugiyama is currently affiliated with Yahoo JAPAN Research, where he continues to lead cutting-edge research in audio coding, speech enhancement, and interference/noise control. His illustrious career began at NEC Central Research Laboratories, where he served as a principal research engineer for several decades. His innovative work has led to 217 registered patents, with more pending, and contributions to 17 book chapters, reflecting the depth and breadth of his expertise. He is widely recognized for his leadership in the global research community, having served in numerous influential roles within the IEEE Signal Processing Society (SPS).
Dr. Sugiyama has delivered 169 invited talks in 87 cities across 30 countries. His speaking credentials are further affirmed by his past roles as a Distinguished Lecturer for both SPS and the IEEE Consumer Technology Society (CTS). His exceptional contributions have earned him 20 prestigious awards, including the IEICE Best Paper Award (2002), IEICE Achievement Awards (2006 & 2018), the Ichimura Industry Award (2013), and the IEICE Distinguished Achievement and Contribution Award (2021).
Among his recent works are influential papers on adaptive noise cancellation algorithms, speech enhancement technologies, and the interplay between innovation and standardization in media signal processing. His insights continue to shape the future of audio and acoustic signal processing. Dr. Sugiyama brings not only technical brilliance but also a rare blend of academic depth, industry insight, and global vision.`,
  },
  {
    name: "Dr. U P Rajeev",
    title:
      "Programme Director, Space Transportation System, VSSC",
    image: uprajeev,
    datetime: "24th May 2025, 11:30 AM - 12:30 PM",
    topic: "Interplanetary Superhighway - Redefining Interplanetary Travel",
    bio: ``,
  },
  {
    name: "Saji S",
    title: "Senior Vice President, HVDC Hitachi Energy India",
    image: DrSaji, // Replace with actual image when available
    datetime: "25th May 2025, 9:30 AM - 10:30 AM",
    topic: "Advanced Control & Computing System for Enabling Energy Transition",
    bio: `Saji S is Hitachi Energy's HUB Manager HVDC & HVDC Service India. He joined the technology
pioneer in 1995 and led some of its milestone and most ambitious power-linking projects in India.
Hitachi Energy is the global leader in HVDC technology and has installed around half of the
transmission links worldwide. He completed an Executive Education Program in Marketing (EEPM) at
the Indian Institute of Management, Kozhikode, focusing on Marketing/Marketing Management,
General, in 2011-2012. He completed a Bachelor of Technology (B.Tech) degree in Electrical &
Electronics from the University of Kerala, studying there from 1987 to 1991. He led Hitachi Energy's
second and one of India's longest ultrahigh-voltage direct current transmission link projects, running
from Raigarh in central India to Pugalur in Tamil Nadu from 2016 onwards. He also headed the upgrade
work of India's oldest commercial HVDC link between Rihand in Uttar Pradesh and Dadri near Delhi.
He spearheaded ABB's first industrial drive factory setup in India and the establishment of its solar
inverters business here. With close to three decades of experience in the Automation & Energy domain,
Saji has handled diverse leadership roles at ABB ranging from Asst. Vice President of LV Drive Systems
and Renewable Business to Vice President Power Systems. In these roles, he has helped shape Hitachi
Energy offerings, ensuring high quality products and services for customers. For more than 25 years,
ABB has supported India's HVDC journey, and Saji has seen all of it. He is well-versed with the
country's power sector and energy challenges and believes UHVDC will play a large part in India's
energy revolution.`,
  },
];

const KeynoteSpeakers: React.FC = () => {
  return (
    <div className="keynote-speakers-container">
      <h1>Keynote Speakers</h1>
      <p className="intro-text">
        We are honored to present our distinguished keynote speakers for ICCC
        2025. These industry leaders and academic experts will share their
        insights on cutting-edge topics in control, communication, and
        computing.
      </p>

      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card" id={`speaker${index}`}>
            <div className="speaker-image">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speaker-info">
              <h2>
                <strong>{speaker.name}</strong>
              </h2>
              <h3>
                <strong>{speaker.title}</strong>
              </h3>
              <p className="speaker-datetime"><strong>Date & Time:</strong> {speaker.datetime}</p>
              <p className="speaker-topic"><strong>Topic:</strong> {speaker.topic}</p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
