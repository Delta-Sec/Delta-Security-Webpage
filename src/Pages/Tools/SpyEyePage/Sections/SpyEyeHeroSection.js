import "../SpyEyePage.css";
import SpyEyeLogo from "../../../../GlobalAssets/Logos/SpyEyeLogo";
import QuickInstallButton from "./QuickInstallButton";
import SeeDocumentationButton from "./SeeDocumentationButton";

export default function SpyEyeHeroSection() {
  return (
    <div className="se-container">
      <div>
        <SpyEyeLogo widthSize="150px" fillColor="var(--spy-eye-color)" />
      </div>
      <h1 className="spyeye-hero-title">The Apex of Hybrid Network Warfare</h1>
      <h2 className="hero-desc">
        SpyEye is not just a tool; it is a paradigm shift in 802.11 security
        assessments. By decoupling command-and-control logic from
        hardware-accelerated execution, we bridge the gap between high-level
        orchestration and low-level frame injection.
      </h2>
      <div className="CTA-section">
        <QuickInstallButton />
        <SeeDocumentationButton />
      </div>
      <div className="CTA-desc">
        Free Download,{" "}
        <span style={{ color: "var(--spy-eye-color)" }}>
          For Education Only
        </span>
      </div>
    </div>
  );
}
