import React, { useState } from "react"; // استيراد useState
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PythonIcon from "../../../../GlobalAssets/Icons/PythonIcon";
import CPUIcon from "../../../../GlobalAssets/Icons/CPUIcon";

export default function ArchSection() {
  // إنشاء State لكل أكورديون لمراقبة الفتح والإغلاق
  const [isPythonOpen, setIsPythonOpen] = useState(false);
  const [isCPUOpen, setIsCPUOpen] = useState(false);

  return (
    <div>
      <h3 className="sub-title">Architectural Philosophy</h3>
      <h1 className="title">The Hybrid Advantage</h1>
      <p style={{ fontSize: "20px" }}>
        Traditional Wi-Fi attack tools rely heavily on the host operating system
        for packet injection, leading to instability, driver conflicts, and
        timing inconsistencies. SpyEye eliminates these bottlenecks by
        offloading critical 802.11 operations to the ESP32 Probe.
      </p>

      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="accordion-section"
      >
        <div className="accordion" >
          {/* الأكورديون الأول: بايثون */}
          <Accordion
            expanded={isPythonOpen}
            onChange={() => setIsPythonOpen(!isPythonOpen)}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "var(--spy-eye-color)" }} />}
              className="accordion-box"
            >
              <Typography className="accordion-title" component="span">
                
                The Python C2 (Host)
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details-box" style={{ textAlign: "left" }}>
              <Typography className="accordion-desc">
                This component, running on a Linux host, handles the complex,
                resource-intensive tasks of network orchestration, victim
                traffic manipulation, and data logging.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* الأكورديون الثاني: ESP32 */}
          <Accordion
            expanded={isCPUOpen}
            onChange={() => setIsCPUOpen(!isCPUOpen)}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "var(--spy-eye-color)" }} />}
              className="accordion-box"
            >
              <Typography component="span" className="accordion-title">
                
                The ESP32 Probe (Attacker)
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details-box">
              <Typography className="accordion-desc" style={{ textAlign: "left" }}>
                This dedicated microcontroller acts as the specialized "weapon."
                It is responsible for all time-critical, frame-level 802.11 operations.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* منطقة البريفيو مع الأنيميشن */}
        <div className="arch-preview">
          <div className={`preview-icon-wrapper ${isPythonOpen ? "show" : ""}`}>
            <PythonIcon widthSize="120px" fillColor="var(--spy-eye-color)" />
            <p className="preview-label">PYTHON C2</p>
          </div>
          
          <div className={`preview-icon-wrapper ${isCPUOpen ? "show" : ""}`}>
            <CPUIcon widthSize="120px" fillColor="var(--spy-eye-color)" />
            <p className="preview-label">ESP32 PROBE</p>
          </div>

          {!isPythonOpen && !isCPUOpen && (
            <p className="placeholder-text">Select a component to inspect</p>
          )}
        </div>
      </div>
    </div>
  );
}