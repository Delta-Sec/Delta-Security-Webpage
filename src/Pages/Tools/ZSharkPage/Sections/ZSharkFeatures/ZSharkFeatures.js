import React from 'react';
import './ZSharkFeatures.css';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LinkIcon from '@mui/icons-material/Link';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';

const features = [
  {
    icon: <ElectricBoltIcon />,
    title: "Invisible Threat Finder",
    desc: "Catch hackers before they act. Z-Shark finds the hidden 'heartbeat' of malware that traditional tools never see.",
    footer: "FFT SIGNAL ANALYSIS"
  },
  {
    icon: <LinkIcon />,
    title: "Smart Link Shield",
    desc: "Block dangerous websites. We spot the fake web addresses used by cyber-criminals to steal your data and take control.",
    footer: "DGA ENTROPY GUARD"
  },
  {
    icon: <SecurityIcon />,
    title: "Unstoppable Guard",
    desc: "Stop crashes before they happen. Our system detects and blocks massive traffic attacks to keep you online.",
    footer: "REAL-TIME Z-SCORE"
  },
  {
    icon: <DescriptionIcon />,
    title: "Instant Expert Reports",
    desc: "Turn complex data into simple answers. Professional reports that give you clear proof about your security in seconds.",
    footer: "PDF FORENSIC EVIDENCE"
  }
];

export default function ZSharkFeatures() {
  return (
    <div className="zshark-features-container">
      {/* قسم العنوان */}
      <div className="features-text-section">
        <h1 className="main-headline">
          Z-Shark: <span className="neon-text">Guardian of the Deep Network</span>
        </h1>
        <p className="sub-headline">
          Advanced packet analysis that turns raw network data into actionable security intelligence.
        </p>
      </div>

      {/* قسم الكروت */}
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="zshark-feature-card">
            <div className="card-icon-wrapper">
              {f.icon}
            </div>
            <h3 className="zshark-card-title">{f.title}</h3>
            <p className="zshark-card-desc">{f.desc}</p>
            <div className="zshark-card-footer">{f.footer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}