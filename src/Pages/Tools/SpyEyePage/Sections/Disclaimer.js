import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function Disclaimer() {
  return (
    <div className="disclaimer-box">
      <div className="disclaimer-title">
        <ReportProblemIcon
          style={{ fontSize: "75px", color: "var(--spy-eye-color)" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ padding: "0", margin: "0" }}>WARNING</h1>
          <h2 style={{ padding: "0", margin: "0" }}>LEGAL DISCLAIMER</h2>
        </div>
      </div>
      <h3 className="disclaimer-desc">
        This tool is developed strictly for educational purposes and authorized
        security auditing. The authors of SpyEye disclaim any responsibility for
        misuse or damage caused by this software. Accessing networks without
        explicit permission is illegal.{" "}
        <span style={{ color: "var(--spy-eye-color)", fontWeight: "1000" }}>
          Use responsibly
        </span>
        .
      </h3>
    </div>
  );
}
