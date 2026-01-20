export default function ReqTable() {
  const data = [
    {
      label: "Operating System",
      value: "Linux Environment (Kali Linux / Parrot OS).",
    },
    {
      label: "Dependencies",
      value: "Python 3.10+, Flask, Hostapd, Dnsmasq.",
    },
    {
      label: "Firmware",
      value: "Espressif IoT Development Framework (ESP-IDF).",
    },
    {
      label: "Attack Probe",
      value: "ESP32 Development Board (ESP-WROOM-32 recommended).",
    },
    {
      label: "Rogue Interface",
      value: "USB Wi-Fi Adapter with AP Mode support (Atheros).",
    },
    {
      label: "Uplink Interface",
      value: "Standard Network Adapter for internet bridging.",
    },
  ];

  return (
    <div>
      <h3 className="sub-title" style={{ fontFamily: "orbitron" }}>
        DEPLOYMENT
      </h3>
      <h1 className="title">SYSTEM REQUIREMENTS</h1>
      <p style={{ fontSize: "20px" }}>
        To unleash the full potential of SpyEye, ensure your environment meets
        the following hardware and software specifications.
      </p>
      <div className="table-wrapper">
        <div className="table-container">
          {data.map((row, index) => (
            <div className="table-row" key={index}>
              <div className="table-label">{row.label}</div>
              <div className="table-value">{row.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
