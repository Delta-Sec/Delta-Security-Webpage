import "./StegXSteps.css";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Divider from "@mui/material/Divider";

export default function StegXSteps() {
  const encodeSteps = [
    {
      id: "01",
      title: "Upload",
      desc: "Select the carrier image you want to hide data in.",
      icon: <CloudUploadIcon />,
    },
    {
      id: "02",
      title: "Select",
      desc: "Choose the file or enter the text you want to embed.",
      icon: <FileOpenIcon />,
    },
    {
      id: "03",
      title: "Enter Passkey",
      desc: "Set a strong password for Military-Grade encryption.",
      icon: <VpnKeyIcon />,
    },
    {
      id: "04",
      title: "Start",
      desc: "Process your image and download the Stego result.",
      icon: <EnhancedEncryptionIcon />,
    },
  ];

  const decodeSteps = [
    {
      id: "01",
      title: "Upload",
      desc: "Select the Stego image you wish to extract data from.",
      icon: <CloudUploadIcon />,
    },
    {
      id: "02",
      title: "Enter Passkey",
      desc: "Provide the password used to encrypt the hidden data.",
      icon: <VpnKeyIcon />,
    },
    {
      id: "03",
      title: "Extract",
      desc: "Initiate the decoding process and download your results.",
      icon: <LockOpenIcon />,
    },
  ];
  const [tabValue, setTabValue] = useState("encode");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div className="process-wrapper">
      <div className="process-header">
        <span className="subtitle">STEALTH PROCESS</span>
        <h2 className="title">
          HOW IT WORKS<span>?</span>
        </h2>
      </div>

      <Box sx={{ width: "100%", bgcolor: "transparent", mt: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth" 
          slotProps={{
            indicator: {
              style: {
                backgroundColor: "var(--steg-x-color)",
                height: "3px",
              },
            },
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "3px", 
            minHeight: "60px",
            "& .MuiTab-root": {
              color: "rgba(255,255,255,0.6)",
              fontFamily: "Rajdhani",
              fontSize: { xs: "16px", sm: "20px" },
              fontWeight: "600",
              textTransform: "uppercase",
              transition: "0.3s",
            },
            "& .Mui-selected": {
              color: "var(--steg-x-color) !important",
              backgroundColor: "rgba(255, 217, 0, 0.1)", 
            },
          }}
        >
          <Tab value="encode" label="Encode" />
          <Tab value="decode" label="Decode" />
        </Tabs>

        <div className="tab-content-container" style={{ marginTop: "40px" }}>
          {tabValue === "encode" && (
            <div className="encode-section">
              <div className="steps-grid">
                {encodeSteps.map((step) => (
                  <div key={step.id} className="step-card">
                    <div className="step-icon-watermark">{step.icon}</div>
                    <div className="step-number">
                      <div className="step-id">{step.id}</div>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        borderColor: "rgba(255, 217, 0, 0.3)", 
                        borderRightWidth: "0.5px", 
                        opacity: 1, 
                        mx: 0.25, 
                      }}
                    />
                    <p className="step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tabValue === "decode" && (
            <div className="decode-section">
              <div className="steps-grid" id="decode-steps-grid">
                {decodeSteps.map((step) => (
                  <div key={step.id} className="step-card">
                    <div className="step-icon-watermark">{step.icon}</div>
                    <div className="step-number">
                      <div className="step-id">{step.id}</div>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{
                        borderColor: "rgba(255, 217, 0, 0.3)", 
                        borderRightWidth: "0.5px", 
                        opacity: 1, 
                        mx: 0.25, 
                      }}
                    />
                    <p className="step-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginTop: "50px" }}>Curious How It Works?</h2>

        <p style={{ fontSize: "20px", marginTop: 0 }}>
          You can go to documentation and see more details and steps of encoding
          and decoding images
        </p>
        <button id="see-docs-button">
          {" "}
          <InsertDriveFileIcon /> See the Docs
        </button>
      </div>
    </div>
  );
}
