import LaptopSVG from "../../../../../GlobalAssets/LaptopSVG";
import FalconLogo from "../../../../../GlobalAssets/Logos/FalconLogo";
import "./FalconHero.css";

export default function FalconHero() {
  return (
    <div style={{display:"flex"}}>
      <div style={{width:"50%"}}>
        <FalconLogo
          fillColor="var(--falcon-defender-color)"
          widthSize="350px"
        />
        <h1>
            Safety Starts with Antivirus
        </h1>
        <p>A powerful, lightweight file scanner designed by DeltaSec to detect, quarantine, and neutralize threats before they harm your system.</p>
        <button>Download FD v2.0.0</button>
        <button>How it Works?</button>
      </div>
      <div style={{width:"50%", maskImage:"linear-gradient(to right, black 92%, transparent 100%)"}}>
        <LaptopSVG/>
      </div>
    </div>
  );
}
