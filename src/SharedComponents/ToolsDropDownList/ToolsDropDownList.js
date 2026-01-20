import React from "react";
import SpyEyeIcon from "../../GlobalAssets/Icons/SpyEyeIcon";
import StegXIcon from "../../GlobalAssets/Icons/StegXIcon";
import FalconDefenderIcon from "../../GlobalAssets/Icons/FalconDefenderIcon";
import ZSharkIcon from "../../GlobalAssets/Icons/ZSharkIcon";
import "./ToolsDropDownList.css";
import { Link } from "react-router-dom";

const toolsData = [
  {
    id: "spy-eye",
    category: "Offensive Tools",
    title: "Spy Eye Tool",
    desc: "Evil Twin Attack (Python)",
    color: "#FF003C" + 20,
    icon: <SpyEyeIcon fillColor="#FF003C" widthSize="40px" />,
    link: "spyeye",
  },
  {
    id: "steg-x",
    title: "StegX Tool",
    desc: "Non-Linear LSB Steganography",
    color: "#BDB800" + 20,
    icon: <StegXIcon fillColor="#BDB800" widthSize="32px" />,
    link: "stegx",
  },
  {
    id: "falcon-defender",
    category: "Defensive Tools",
    title: "Falcon Defender",
    desc: "Signature-based Detection",
    color: "#15B24B" + 20,
    icon: <FalconDefenderIcon fillColor="#15B24B" widthSize="28px" />,
    link: "falcondefender",
  },
  {
    id: "z-shark",
    title: "Z Shark Tool",
    desc: "Online PCAP Analyser",
    color: "#1BE7FF" + 20,
    icon: <ZSharkIcon fillColor="#1BE7FF" widthSize="40px" />,
    link: "zshark",
  },
];

export default function ToolsDropDownList() {
  return (
    <div className="card-content-wrapper">
      <div className="card-content">
        {toolsData.map((tool) => (
          <React.Fragment key={tool.id}>
            {tool.category && (
              <div className="category-header">
                <span className="category-text">{tool.category}</span>
                <div className="h-divider"></div>
              </div>
            )}
            <Link to={`/${tool.link}`}>
              <div
                className="tools-sub-cards"
                style={{
                  "--hover-bg": `linear-gradient(to right, #000, ${tool.color})`,
                }}
              >
                <div className="logo-container">{tool.icon}</div>
                <div className="custom-divider"></div>
                <div className="card-info">
                  <div className="card-title">{tool.title}</div>
                  <div className="card-subtitle">{tool.desc}</div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
