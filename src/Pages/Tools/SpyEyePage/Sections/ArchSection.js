import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PythonIcon from "../../../../GlobalAssets/Icons/PythonIcon";
import CPUIcon from "../../../../GlobalAssets/Icons/CPUIcon";


export default function ArchSection() {
   
  return (
    <div>
      <h3 className="sub-title">Architectural Philosophy</h3>
      <h1 className="title">The Hybrid Advantage</h1>
      <p style={{fontSize:"20px"}}>
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
        <div className="accordion">
          <Accordion
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "var(--spy-eye-color)" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              className="accordion-box"
            >
              <Typography className="accordion-title" component="span">
                <PythonIcon widthSize="35px" fillColor="var(--spy-eye-color)" />
                The Python C2 (Host)
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details-box" style={{textAlign:"left"}}>
              <Typography className="accordion-desc">
                This component, running on a Linux host, handles the complex,
                resource-intensive tasks of network orchestration, victim
                traffic manipulation, and data logging. It is the brain of the
                operation, managing the Rogue AP, DNS/DHCP services, and the
                Captive Portal.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "var(--spy-eye-color)" }} />
              }
              aria-controls="panel2-content"
              id="panel2-header"
              className="accordion-box"
            >
              <Typography component="span" className="accordion-title">
                <CPUIcon widthSize="35px" fillColor="var(--spy-eye-color)" />
                The ESP32 Probe (Attacker)
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-details-box">
              <Typography className="accordion-desc" style={{textAlign:"left"}}>
                This dedicated microcontroller acts as the specialized "weapon."
                It is responsible for all time-critical, frame-level 802.11
                operations (like Deauthentication and PMKID capture). By
                offloading these tasks to dedicated hardware, SpyEye achieves
                unparalleled stability and precision in its attacks, bypassing
                the limitations of host-OS-based packet injection.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="arch-preview">
            <PythonIcon/>
        </div>
      </div>
    </div>
  );
}
