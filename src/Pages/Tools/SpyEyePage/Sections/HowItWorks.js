import Typewriter from "typewriter-effect";

export default function HowItWorks() {
  return (
    <div>
      <div>
        <h3 style={{ margin: "0", fontFamily: "orbitron" }}>UNDER THE HOOD</h3>
        <h1 className="title">THE C2-PROBE DATA FLOW</h1>
        <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.85)" }}>
          The communication pipeline is established via a high-speed Serial
          interface. The Python C2 issues high-level directives (e.g.,
          INITIATE_DEAUTH), which the ESP32 firmware translates into raw frame
          injection sequences.
        </p>
      </div>

      <div
        style={{ position: "relative", width: "100%", height: "fit-content" }}
      >
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="2"
            strokeDasharray="10, 5"
          />
        </svg>
        <div style={{ padding: "15px" }}>
          <div className="steps" style={{ height: "100%" }}>
            <div className="step-box">
              Python C2 <b>(Host)</b>
            </div>
            <div className="loading"></div>
            <div className="step-box">Serial Interface</div>
            <div className="loading"></div>
            <div className="step-box">ESP32 Firmware</div>
            <div className="loading"></div>
            <div className="step-box">802.11 Injection</div>
          </div>
        </div>
      </div>
      <div className="cmd-box" style={{textAlign:"left", fontFamily:"monospace"}}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(">  Initializing DeltaSec SpyEye...")
              .pauseFor(1000)
              .typeString("<br/>>  def initiate_attack(target):")
              .pauseFor(400)
              .typeString("<br/>>  serial.write(b'DEAUTH' + target.bssid)")
              .pauseFor(1500)
              .typeString("<br/>>  Hardware injection started...")
              .start();
          }}
          options={{
            delay: 25,
            cursor: "|",
          }}
        />
      </div>
      <div className="cmd-explain" style={{textAlign:"left"}}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(7000)
              .typeString("> Reconnaissance: ESP32 scans channels.")
              .pauseFor(1000)
              .typeString(
                "<br/>> Isolation: Operator selects target; ESP32 suppresses."
              )
              .pauseFor(400)
              .typeString("<br/>> Lure: Host launches Rogue AP.")
              .pauseFor(1500)
              .typeString("<br/>> Capture: Flask portal captures data.")
              .start();
          }}
          options={{
            delay: 25,
            cursor: "_",
          }}
        />
      </div>
    </div>
  );
}
