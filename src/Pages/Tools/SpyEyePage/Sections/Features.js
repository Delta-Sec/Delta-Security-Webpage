import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LanIcon from "@mui/icons-material/Lan";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

export default function Features() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 className="sub-title">A Full Spectrum</h3>
      <h1 className="title" style={{ marginBottom: "20px" }}>
        Attack Surface
      </h1>
      <div className="features-cards" >
        <div className="feature-card" id="f1">
          <div className="feature-title">
            <div className="feature-icon">
              <WifiTetheringIcon sx={{ fontSize: "50px" }} />
            </div>
            <h2>Advanced Rogue Access Point</h2>
          </div>
          <div className="feature-desc">
            Engineered to deceive. SpyEye creates a compelling "Evil Twin"
            network that mimics legitimate infrastructure. Integrated with
            hostapd and dnsmasq, it provides a seamless connection experience
            for victims.
          </div>
        </div>
        <div className="feature-card" id="f2">
          <div className="feature-title">
            <div className="feature-icon">
              <LockPersonIcon sx={{ fontSize: "50px" }} />
            </div>
            <h2>High-Fidelity Credential Harvesting</h2>
          </div>
          <div className="feature-desc">
            The Captive Portal is a psychological trap. Deploy pixel-perfect
            templates. The system captures cleartext credentials, User-Agent
            strings, and device fingerprints to a structured JSON database.
          </div>
        </div>
        <div className="feature-card" id="f3">
          <div className="feature-title">
            <div className="feature-icon">
              <LanIcon sx={{ fontSize: "50px" }} />
            </div>
            <h2>Ruthless Traffic Manipulation</h2>
          </div>
          <div className="feature-desc">
            Total control over data flow. Through dynamic iptables rules and DNS
            spoofing, SpyEye creates a walled garden. Victims are transparently
            redirected to the C2 controller.
          </div>
        </div>
        <div className="feature-card" id="f4">
          <div className="feature-title">
            <div className="feature-icon">
              <ElectricBoltIcon sx={{ fontSize: "50px" }} />
            </div>
            <h2>Hardware-Accelerated Suppression</h2>
          </div>
          <div className="feature-desc">
            The ESP32 Probe acts as a dedicated jammer. It performs targeted
            Deauthentication attacks to force clients off their secure networks
            and towards your Rogue AP.
          </div>
        </div>
      </div>
    </div>
  );
}
