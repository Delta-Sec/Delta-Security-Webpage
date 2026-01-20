import ZSharkLogo from "../../../../../GlobalAssets/Logos/ZSharkLogo";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import './ZSharkHero.css'

export default function ZSharkHero() {
  return (
    <div className="zshark-hero">
      <div className="zshark-text-hero">
        <h1>
          DOMINATE THE{" "}
          <span style={{ color: "var(--z-shark-color)" }}>DATA STREAM</span>
        </h1>
        <p>
          Visualize the invisible. ZShark provides deep packet inspection,
          real-time traffic analysis, and protocol decoding for total network
          transparency
        </p>
        <div className="CTA-zshark">
          <button className="zshark-start-CTA">
            <AutoGraphIcon /> Start Analysis
          </button>
          <button className="zshark-docs-btn">
            <ArrowOutwardIcon /> See Documentation
          </button>
        </div>
      </div>
      <div className="zshark-hero-preview">
        <ZSharkLogo fillColor={"var(--z-shark-color)"} widthSize="350px" />
      </div>
    </div>
  );
}
