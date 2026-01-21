import React from "react";
import "./DocsDropDownList.css";
import Divider from "@mui/material/Divider";

export default function DocsDropDownList({ title, toolColor, hoverBg, items }) {
  const divider = (
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={{
        borderColor: "rgba(255, 255, 255, 0.1)",
        margin: "0 15px",
        height: "25px",
        alignSelf: "center",
      }}
    />
  );

  return (
    <div 
      className="docs-container" 
      style={{ "--accent-color": toolColor, "--hover-bg": hoverBg }}
    >
      <div className="docs-header">{title}</div>

      {items.map((item, index) => (
        <div className="docs-sub-cards shared-item" key={index}>
          <item.icon className="docs-icon" sx={{ color: "var(--accent-color)" }} />
          {divider}
          <div className="docs-text">
            <p className="docs-title">{item.title}</p>
            <p className="docs-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}