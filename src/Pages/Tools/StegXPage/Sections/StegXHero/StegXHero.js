import SteganographyIcon from "../../../../../GlobalAssets/Icons/SteganographyIcon";
import StegXLogo from "../../../../../GlobalAssets/Logos/StegXLogo";
import StegXLogoVertical from "../../../../../GlobalAssets/Logos/StegXLogoVertical";
import "./StegXHero.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function StegXHero() {
  return (
    <div className="hero-container-stegx">
      <h4 id="stegx-hero-title">Invisible Impenetrable</h4>
      <div id="stegx-desktop-logo">
        <StegXLogo widthSize={"350px"} fillColor={"var(--steg-x-color)"} />
      </div>
      <div id="stegx-mobile-logo">
        <StegXLogoVertical />
      </div>
      <div className="stegx-hero-desc">
        <h1>The World’s First Steganography Tool</h1>
        <h1>Integrating Non-Linear LSB & Military-Grade Encryption.</h1>
      </div>
      <div className="steg-x-CTA-buttons">
        <button className="steg-x-CTA-button" id="generate-image">
          <SteganographyIcon widthSize="20px" />
          <p style={{ margin: "0" }}>Generate a Stego Image</p>
        </button>
        <button className="steg-x-CTA-button" id="view-docs">
          <ArrowOutwardIcon /> View Documentation
        </button>
      </div>
    </div>
  );
}
