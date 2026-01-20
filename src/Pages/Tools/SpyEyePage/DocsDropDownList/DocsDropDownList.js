import "./DocsDropDownList.css";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import FlagIcon from "@mui/icons-material/Flag";
import SettingsIcon from "@mui/icons-material/Settings";
import TerminalIcon from "@mui/icons-material/Terminal";
import Divider from "@mui/material/Divider";

export default function DocsDropDownList() {
  const divider = (
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={{
        borderColor: "var(--border-color)",
        margin: "0 15px",
        height: "25px",
        alignSelf: "center",
      }}
    />
  );

  return (
    <div className="docs-container">
      <div className="docs-header">SpyEye Documentation</div>

      <div className="docs-sub-cards spyeye-item">
        <FlagIcon className="docs-icon" />
        {divider}
        <div className="docs-text">
          <p className="docs-title">Quick Start</p>
          <p className="docs-desc">Launch your first simulation</p>
        </div>
      </div>

      <div className="docs-sub-cards spyeye-item">
        <SettingsIcon className="docs-icon" />
        {divider}
        <div className="docs-text">
          <p className="docs-title">Requirements</p>
          <p className="docs-desc">Hardware & TP-Link setup</p>
        </div>
      </div>

      <div className="docs-sub-cards spyeye-item">
        <DownloadSharpIcon className="docs-icon" />
        {divider}
        <div className="docs-text">
          <p className="docs-title">Installation</p>
          <p className="docs-desc">Dependencies & Python setup</p>
        </div>
      </div>

      <div className="docs-sub-cards spyeye-item">
        <TerminalIcon className="docs-icon" />
        {divider}
        <div className="docs-text">
          <p className="docs-title">Execution</p>
          <p className="docs-desc">Running the Evil Twin attack</p>
        </div>
      </div>
    </div>
  );
}
