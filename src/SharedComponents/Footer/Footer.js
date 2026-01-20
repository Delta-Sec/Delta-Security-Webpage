import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SpyEyeIcon from "../../GlobalAssets/Icons/SpyEyeIcon";
import StegXIcon from "../../GlobalAssets/Icons/StegXIcon";
import FalconDefenderIcon from "../../GlobalAssets/Icons/FalconDefenderIcon";
import ZSharkIcon from "../../GlobalAssets/Icons/ZSharkIcon";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function Footer() {
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
    <footer className="footer">
      <div className="project-name">
        <span>© 2026 DeltaSec Graduation Project.</span>
        <span>Engineered for the Security Community.</span>
      </div>

      <div className="ToolsIcons">
        <Link to={`/${"spyeye"}`}>
          <div className="icon-wrapper spyeye">
            <SpyEyeIcon fillColor={"white"} widthSize={"40px"} />
          </div>
        </Link>
        {divider}

        <Link to={`/${"stegx"}`}>
          <div className="icon-wrapper stegx">
            <StegXIcon fillColor={"white"} widthSize={"30px"} />
          </div>
        </Link>
        {divider}

        <Link to={`/${"falcondefender"}`}>
          <div className="icon-wrapper falcon">
            <FalconDefenderIcon fillColor={"white"} widthSize={"23px"} />
          </div>
        </Link>
        {divider}
        <Link to={`/${"zshark"}`}>
          <div className="icon-wrapper zshark">
            <ZSharkIcon fillColor={"white"} widthSize={"30px"} />
          </div>
        </Link>
      </div>

      <div className="footer-nav">
        <span>FAQ</span>
        <a href="https://github.com/Delta-Sec" target="blank">
          <span>DOCS</span>
        </a>
        <a href="https://github.com/Delta-Sec" target="blank">
          <span>ABOUT US</span>
        </a>
      </div>

      <div className="contactInfo">
        <a href="https://github.com/Delta-Sec" target="blank">
          <GitHubIcon fontSize="large" />
        </a>
        {divider}
        <a href="mailto:noreply@delta-sec.site">
          <EmailIcon fontSize="large" />{" "}
        </a>
        {divider}
        <AutoStoriesIcon fontSize="large" />
      </div>
    </footer>
  );
}
