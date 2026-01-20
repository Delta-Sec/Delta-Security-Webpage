import { useState } from "react";

export default function ContactButton({ ThemeColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = {
    width: "130px",
    height: "35px",
    transition: "all 0.15s ease-in-out",
    fontSize: "18px",
    fontFamily: "rajdhani",
    fontWeight: "700",
    backgroundColor: `var(--bg-dark)`,
    color: "#fff",
    cursor: "pointer",
    border: `1px solid ${ThemeColor}`,
    borderRadius: "3px"
  };

  const hoverStyle = {
    backgroundColor: `${ThemeColor}`,
    color: "#000",
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...normalStyle,
        ...(isHovered ? hoverStyle : {}),
      }}
    >
      Contact Us
    </button>
  );
}
