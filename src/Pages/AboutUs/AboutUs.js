import { useState, useEffect } from "react";
import "./AboutUs.css"; // استيراد ملف الأنماط الجديد
import NavBar from "../../SharedComponents/NavBar/NavBar";
import "../../SharedComponents/NavBar/NavBar.css";
import ayham from "./ayham.JPG";
import zoul from "./zoul.JPG";
import omar from "./omar.JPG";
import hijjawi from "./hijjawi.JPG";
import DeltaSecIcon from "../../GlobalAssets/Icons/DeltaSecIcon";

// أيقونات SVG بسيطة بديلة لـ lucide-react
const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.5-.75-3.5.25-1.5-.2-3.5-1.25-4.5-1 0-3 1.5-3.75 2.5-1-.3-2-.5-3-.5s-2 .2-3 .5c-.75-1-2.75-2.5-3.75-2.5-1.05 1-1.5 3-1.25 4.5-.48 1-.83 2.25-.75 3.5 0 3.5 3 5.5 6 5.5-1 .5-1.5 1.5-1.5 3v4" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// بيانات أعضاء الفريق (تم تحويلها من TypeScript إلى JavaScript)
const teamMembers = [
  {
    id: 1,
    name: "Ayham Asfoor",
    role: "Chief Tool Developer",
    description:
      "Technical architect and core developer of all four tools. Engineered SpyEye, StegX, Falcon Defender, and Z Shark.",
    image: ayham,
    expertise: [
      { name: "Python" },
      { name: "Backend" },
      { name: "Security" },
      { name: "Architecture" },
      { name: "Cryptography" },
      { name: "Networking" },
    ],
    social: {
      github: "https://github.com/AyhamAsfoor",
      linkedin: "https://www.linkedin.com/in/ayham-asfoor-949630256?",
      instagram:
        "https://www.instagram.com/ayham.asfoor?igsh=MW1mbnJiZDRzOG0yeQ==",
      email: "mailto:ayhamasfoor1@gmail.com",
    },
  },
  {
    id: 2,
    name: "Ahmad Alzoul",
    role: "Web Builder & AI Assistant",
    description:
      "Core web builder responsible for platform's visual identity. Developed interfaces for StegX and Falcon Defender.",
    image: zoul,
    expertise: [
      { name: "React" },
      { name: "Frontend" },
      { name: "UI/UX" },
      { name: "JavaScript" },
      { name: "CSS" },
      { name: "Design" },
    ],
    social: {
      github: "https://github.com/Ce-Zoul",
      linkedin:
        "https://www.linkedin.com/in/ahmad-alzoul-a1ab6b226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/ahmad.alzoul?igsh=MWVhb2ZmdmI3Zm1sbw==",
      email: "mailto:engzoul@gmail.com",
    },
  },
  {
    id: 3,
    name: "Omar Waleed",
    role: "Web Builder & UI Designer",
    description:
      "Talented web builder and UI designer. Crafted user-centric interfaces for SpyEye and Z Shark.",
    image: omar,
    expertise: [
      { name: "Design" },
      { name: "Frontend" },
      { name: "Figma" },
      { name: "HTML/CSS" },
      { name: "Animation" },
      { name: "UX" },
    ],
    social: {
      github: "https://github.com/Omar-Waleeed",
      linkedin: "https://www.linkedin.com/in/omar-waleeed",
      instagram: "https://www.instagram.com/omar.waleeed",
      email: "mailto:omaralsughair1@gmail.com",
    },
  },
  {
    id: 4,
    name: "Ahmad Hijjawi",
    role: "Security Researcher",
    description:
      "Dedicated to advancing cybersecurity research and developing innovative solutions for modern threats.",
    image: hijjawi,
    expertise: [
      { name: "Penetration Testing" },
      { name: "Vulnerability Research" },
      { name: "Threat Analysis" },
      { name: "Incident Response" },
      { name: "Forensics" },
      { name: "Red Team" },
    ],
    social: {
      github: "https://github.com/Ahmed-Hijjawe",
      linkedin: "https://www.linkedin.com/in/ahmed-hijjawe-102919347/",
      instagram: "https://www.instagram.com/a_7ijjawe_03/",
      email: "mailto:team@deltasec.com",
    },
  },
];

// المكون الرئيسي AboutUs (تم دمج كل شيء فيه)
export default function AboutUs() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Stagger the card animations
    teamMembers.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <div className="about-us-page">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00a397]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00a397]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <NavBar ThemeColor="var(--delta-sec-logo) ">
        </NavBar>
        {/* Hero Section */}
        <section className="container about-hero-section">
          <div className="hero-grid">
            <div className="space-y-6">
              <h1 className="about-hero-title">
                Meet the{" "}
                <span className="about-hero-title-accent">DELTA_SEC</span> Team
              </h1>
              <p className="hero-text">
                We are a collective of dedicated Network & Computer engineers,
                security researchers, and creative designers committed to
                democratizing cybersecurity education. By combining technical
                excellence with intuitive design, our team builds the next
                generation of offensive and defensive tools.
              </p>
            </div>
            <div className="flex justify-center">
              <DeltaSecIcon fillColor={"var(--delta-sec-color)"} widthSize={"250px"}/>
            </div>
          </div>
        </section>

        {/* System Access Banner */}
        <div className="flex justify-center px-4">
          <div className="system-banner">
            SYSTEM ACCESS: GRANTED // PERSONNEL FILE LOADED
          </div>
        </div>

        {/* Team Grid */}
        <section className="container team-grid-section">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`boot-animation terminal-window stagger-${(index % 5) + 1}`}
                style={{ opacity: visibleCards.includes(index) ? 1 : 0 }}
              >
                {/* Terminal Header */}
                <div className="terminal-header">
                  <div className="terminal-dot dot-red"></div>
                  <div className="terminal-dot dot-yellow"></div>
                  <div className="terminal-dot dot-green"></div>
                  <span className="ml-2 text-gray-500 text-xs">
                    /usr/bin/deltasec
                  </span>
                </div>

                {/* Card Content */}
                <div className="about-card-content">
                  {/* Circular Avatar */}
                  <div className="avatar-container">
                    <div className="avatar-circle">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="avatar-img"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>

                  {/* Description */}
                  <p className="member-description">{member.description}</p>

                  {/* Expertise Matrix */}
                  <div className="expertise-matrix">
                    <div className="expertise-label-row">
                      <span>▸</span>
                      <span className="expertise-label">EXPERTISE_MATRIX</span>
                    </div>
                    <div className="expertise-tags">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="social-links">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <GithubIcon className="w-6 h-6" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <LinkedinIcon className="w-6 h-6" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <InstagramIcon className="w-6 h-6" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={member.social.email} className="social-link">
                        <MailIcon className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
