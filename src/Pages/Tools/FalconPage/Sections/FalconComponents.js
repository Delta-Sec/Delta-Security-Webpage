import React from 'react';
import { Container, Grid, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import SpeedIcon from '@mui/icons-material/Speed';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DownloadIcon from '@mui/icons-material/Download';
import './FalconComponents.css';
import FalconLogo from '../../../../GlobalAssets/Logos/FalconLogo';
import FalconDownload from './FalconDownload/FalconDownload';

export const FalconHero = () => {
  return (
    <Box className="falcon-hero">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" className="falcon-hero-grid">
          {/* القسم الأيسر: النصوص والأزرار */}
          <Grid item xs={12} md={6} className="falcon-hero-text-side">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
              <FalconLogo widthSize={"clamp(250px, 40vw, 450px)"} fillColor={"var(--falcon-defender-color)"}/>
              <Typography variant="h5" className="falcon-subtitle">
                Safety Starts with <span>Antivirus</span>
              </Typography>
              <Typography variant="body1" className="falcon-desc">
                A powerful, lightweight file scanner designed by DeltaSec to detect, quarantine, and neutralize threats before they harm your system.
              </Typography>
              <a href="#falcon-download-section"><Button className="falcon-download-btn" startIcon={<DownloadIcon />}>
                Free Download
              </Button></a>
              <Typography variant="caption" className="version-text">
                Stable Ver: 2.0.0 (Win/Linux/macOS)
              </Typography>
            </Box>
          </Grid>

          {/* القسم الأيمن: شاشة التيرمينال */}
          <Grid item xs={12} md={6}>
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
                <Box className="cursor-blink"></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const FalconFeatures = () => {
  const features = [
    { 
      title: "Deep Signature Scanning", 
      desc: "Leverages a massive, curated dataset of known threat signatures to accurately identify malware.", 
      icon: <ShieldIcon sx={{fontSize:"50px"}}/> 
    },
    { 
      title: "Lightweight & Fast", 
      desc: "Built with efficiency in mind, Falcon Defender provides robust protection without slowing down your system.", 
      icon: <SpeedIcon sx={{fontSize:"50px"}}/> 
    },
    { 
      title: "Instant Quarantine", 
      desc: "Suspicious files aren't just detected; they are immediately isolated in a secure environment.", 
      icon: <DeleteSweepIcon sx={{fontSize:"50px"}}/> 
    }
  ];

  return (
    <Box className="falcon-features-section">
      <Container maxWidth="lg">
        <Typography variant="h4" className="falcon-section-title">
          What Makes Falcon Defender Special?
        </Typography>
        {/* تم استخدام justify-content لتوسيط البطاقات في حال كان عددها أقل من 3 */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((f, i) => (
            // تم ضبط البريك بوينت لضمان التوازن (md=4 للديسكتوب، xs=12 للموبايل)
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box className="falcon-feature-card">
                <Box className="falcon-feature-icon">{f.icon}</Box>
                <Typography variant="h6" className="feature-card-title">{f.title}</Typography>
                <Typography variant="body2" className="feature-card-desc">{f.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const FalconRequirements = () => {
  const rows = [
    { cat: "Operating System", req: "Windows 10/11 | Ubuntu 22.04+ | macOS 12+", notes: "Any 64-bit Terminal" },
    { cat: "Python Version", req: "Python 3.8+", notes: "v3.10 recommended" },
    { cat: "Dependencies", req: "watchdog, rich, psutil", notes: "pip install requirements.txt" },
    { cat: "Disk Space", req: "150 MB (Minimum)", notes: "Depends on signature database" },
    { cat: "Memory (RAM)", req: "1 GB", notes: "2 GB Recommended" }
  ];

  return (
    <Container maxWidth="lg" className="falcon-req-section">
      <Typography variant="h4" className="falcon-section-title">System Requirements</Typography>
      <TableContainer component={Paper} className="falcon-table-container">
        <Box sx={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: 600 }}>
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
        </Box>
      </TableContainer>

      <FalconDownload/>
    </Container>
  );
};