import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import {
  MicrosoftLogo,
  LinuxLogo,
  AppleLogo,
} from "../../../../../GlobalAssets/Logos/OSLogos";
import "./FalconDownload.css";

const downloadData = [
  {
    os: "Microsoft Windows",
    LogoComponent: (
      <MicrosoftLogo widthSize="110px" fillColor="rgba(0, 255, 132, 0.15)" />
    ),
    downloadFile: "/downloads/Falcon.Defender.exe",
  },
  {
    os: "Linux",
    LogoComponent: (
      <LinuxLogo widthSize="130px" fillColor="rgba(0, 255, 132, 0.15)" />
    ),
    downloadFile: "/downloads/falcondefender_2.0.0_amd64.deb",
  },
  {
    os: "macOS",
    LogoComponent: (
      <AppleLogo widthSize="110px" fillColor="rgba(0, 255, 132, 0.15)" />
    ),
    downloadFile: "/downloads/falcondefender_2.0.0_amd64.deb",
  },
];

const FalconDownload = () => {
  return (
    <Box className="falcon-download-section" id="falcon-download-section">
      <Container maxWidth="lg">
        <Typography variant="h3" className="download-main-title">
          Take Your First Step to Full Security
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {downloadData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className="download-card">
                <Box className="watermark-box">{item.LogoComponent}</Box>

                <Box className="card-content">
                  <Typography className="os-label">For</Typography>
                  <Typography variant="h4" className="os-name">
                    {item.os.split(" ").length > 1
                      ? item.os.split(" ")[1]
                      : item.os}
                  </Typography>

                  <Button
                    href={item.downloadFile}
                    download
                    variant="contained"
                    className="card-download-btn"
                    startIcon={<DownloadIcon />}
                  >
                    Download
                  </Button>

                  <Typography className="version-info">
                    Latest Version 2.0.0
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FalconDownload;
