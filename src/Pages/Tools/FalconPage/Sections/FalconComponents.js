import React from 'react';
import { Container, Grid, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import SpeedIcon from '@mui/icons-material/Speed';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DownloadIcon from '@mui/icons-material/Download';
import './FalconComponents.css';

export const FalconHero = () => {
  return (
    <Box className="falcon-hero">
      <Container maxWidth="lg">
        <div style={{display:"flex", flexDirection:"row", textAlign:"left", gap:"30px", alignItems:"center"}}>
          <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
            <Typography variant="h2" className="falcon-title">FALCON</Typography>
            <Typography variant="h2" className="falcon-title">DEFENDER</Typography>
            <Typography variant="h5" className="falcon-subtitle">Safety Starts with <span>Antivirus</span></Typography>
            <Typography variant="body1" className="falcon-desc" sx={{fontFamily:"rajdhani"}}>
              A powerful, lightweight file scanner designed by DeltaSec to detect, quarantine, and neutralize threats before they harm your system.
            </Typography>
            <Button className="falcon-download-btn" startIcon={<DownloadIcon />} sx={{maxWidth:"200px", fontFamily:"rajdhani"}}>
              Free Download
            </Button>
            <Typography variant="caption" className="version-text" sx={{maxWidth:"200px", fontFamily:"rajdhani"}}>Stable Ver: 2.0.0 (Win/Linux)</Typography>
          </div>
          <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
            <Box className="falcon-preview-box">
              <Box className="terminal-header-falcon">
                <Box className="dots"><span className="red"></span><span className="yellow"></span><span className="green"></span></Box>
                <Typography variant="caption">falcon_defender --scan</Typography>
              </Box>
              <Box className="terminal-body-falcon">
                <Typography className="code-line">[+] Initializing Falcon Engine...</Typography>
                <Typography className="code-line">[+] Loading Signatures [OK]</Typography>
                <Typography className="code-line">[!] Scanning: /home/user/downloads/suspicious.exe</Typography>
                <Typography className="code-line danger-text">[!!!] THREAT DETECTED: Trojan.Win32.Generic</Typography>
                <Typography className="code-line">[+] Action: Quarantined successfully.</Typography>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export const FalconFeatures = () => {
  const features = [
    { title: "Deep Signature Scanning", desc: "Leverages a massive, curated dataset of known threat signatures to accurately identify malware.", icon: <ShieldIcon  sx={{fontSize:"50px"}}/> },
    { title: "Lightweight & Fast", desc: "Built with efficiency in mind, Falcon Defender provides robust protection without slowing down your system.", icon: <SpeedIcon  sx={{fontSize:"50px"}}/> },
    { title: "Instant Quarantine", desc: "Suspicious files aren't just detected; they are immediately isolated in a secure environment.", icon: <DeleteSweepIcon  sx={{fontSize:"50px"}}/> }
  ];

  return (
    <Container maxWidth="md" className="falcon-features-section">
      <Typography variant="h4" className="falcon-section-title">What Makes Falcon Defender Special?</Typography>
      <div style={{display:"flex", justifyContent:"space-arownd", gap:"30px"}}>
        {features.map((f, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box className="falcon-feature-card">
              <Box className="falcon-feature-icon">{f.icon}</Box>
              <Typography variant="h6">{f.title}</Typography>
              <Typography variant="body2">{f.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </div>
    </Container>
  );
};

export const FalconRequirements = () => {
  const rows = [
    { cat: "Operating System", req: "Windows 10/11 | Ubuntu 22.04+ | macOS 12+", notes: "Any 64-bit Terminal" },
    { cat: "Python Version", req: "Python 3.8+", notes: "v3.10 recommended" },
    { cat: "Dependencies", req: "watchdog, rich, psutil", notes: "pip install requirements.txt" },
    { cat: "Disk Space", req: "150 MB (Minimum)", notes: "Depends on signature database" },
    { cat: "Memory (RAM)", req: "1 GB", notes: "2 GB Recommended for faster scans" }
  ];

  return (
    <Container maxWidth="md" className="falcon-req-section">
      <Typography variant="h4" className="falcon-section-title">System Requirements</Typography>
      <TableContainer component={Paper} className="falcon-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Requirement</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell className="row-label">{row.cat}</TableCell>
                <TableCell>{row.req}</TableCell>
                <TableCell className="row-notes">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
