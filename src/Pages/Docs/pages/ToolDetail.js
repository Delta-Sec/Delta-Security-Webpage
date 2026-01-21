import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { BookOpen, Lock, ShieldCheck, Zap, Terminal, AlertCircle, FileImage, Eye, ShieldAlert } from 'lucide-react';

const toolData = {
  "stegx": {
    name: "StegX",
    version: "v1.2.0",
    description: "Secure LSB Steganography Tool with AES-256-GCM Encryption",
    image: "/images/stegx-card.jpg",
    sections: [
      {
        title: "Overview and Technical Fundamentals",
        content: "StegX is an advanced data hiding tool that embeds confidential information within digital images using non-linear Least Significant Bit (LSB) steganography. The tool combines military-grade encryption (AES-256-GCM) with robust key derivation (scrypt) to ensure hidden data remains undetectable by modern forensic analysis tools."
      },
      {
        title: "Cryptographic Algorithms",
        content: "AES-256-GCM (Galois/Counter Mode) provides three critical security properties: Confidentiality, Authentication, and Performance. scrypt is used for key derivation, making brute-force attacks computationally expensive."
      }
    ],
    toc: ["Overview", "Cryptographic Algorithms", "Encoding Process", "Forensic Analysis"]
  },
  "spyeye": {
    name: "SpyEye",
    version: "v2.0.0",
    description: "Hybrid Network Attack Framework with Hardware-Accelerated ESP32",
    image: "/images/spyeye-card.jpg",
    sections: [
      {
        title: "Network Attack Framework",
        content: "SpyEye is a comprehensive framework for network security auditing and penetration testing. It leverages ESP32 hardware for efficient packet manipulation and credential harvesting."
      }
    ],
    toc: ["Overview", "Hardware Requirements", "Attack Vectors", "C2 Integration"]
  },
  "falcon": {
    name: "Falcon Defender",
    version: "v2.0.0",
    description: "Daemon-Powered Cybersecurity Ecosystem with YARA Signatures",
    image: "/images/falcon-card.jpg",
    sections: [
      {
        title: "Real-time Threat Detection",
        content: "Falcon Defender provides a robust ecosystem for monitoring system integrity and detecting threats using YARA signatures in real-time."
      }
    ],
    toc: ["Overview", "YARA Integration", "Monitoring System", "Response Actions"]
  },
  "z-shark": {
    name: "Z-Shark",
    version: "v2.1.1",
    description: "Mathematical Network Forensics Platform with FFT & Entropy Analysis",
    image: "/images/zshark-card.jpg",
    sections: [
      {
        title: "Mathematical Forensics",
        content: "Z-Shark applies advanced mathematical models like Fast Fourier Transform (FFT) and Shannon Entropy to detect anomalies in network traffic."
      }
    ],
    toc: ["Overview", "FFT Analysis", "Entropy Models", "Anomaly Detection"]
  }
};

const ToolDetail = () => {
  const { id } = useParams();
  const tool = toolData[id];

  if (!tool) return <Navigate to="/" />;

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', height: 400, overflow: 'hidden', mb: 8 }}>
        <Box 
          component="img" 
          src={tool.image} 
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--background), rgba(10, 20, 20, 0.8), transparent)' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.4)' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <Box>
            <Typography 
              component="span" 
              sx={{ 
                display: 'inline-block', px: 1.5, py: 0.5, mb: 2, fontSize: '0.75rem', fontWeight: 'bold', 
                color: 'var(--primary)', bgcolor: 'rgba(0, 217, 255, 0.2)', border: '1px solid rgba(0, 217, 255, 0.4)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {tool.version}
            </Typography>
            <Typography variant="h2" sx={{ color: 'white', mb: 2, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{tool.name}</Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300, maxWidth: 600 }}>{tool.description}</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ pb: 12 }}>
        {/* Table of Contents */}
        <Paper sx={{ p: 4, mb: 8, bgcolor: 'rgba(18, 31, 31, 0.3)', border: '1px solid var(--border)', borderRadius: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <BookOpen size={24} color="var(--primary)" />
            <Typography variant="h6">Table of Contents</Typography>
          </Box>
          <List sx={{ p: 0 }}>
            {tool.toc.map((item, idx) => (
              <ListItem key={idx} sx={{ p: 0, mb: 1 }}>
                <Typography variant="body2" sx={{ color: 'var(--muted-foreground)', '&:before': { content: '"•"', mr: 1, color: 'var(--primary)' } }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Content Sections */}
        {tool.sections.map((section, idx) => (
          <Box key={idx} sx={{ mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4, pb: 1, borderBottom: '1px solid rgba(42, 74, 74, 0.5)' }}>
              <Box sx={{ width: 8, height: 32, bgcolor: 'var(--primary)', transform: 'skewX(-12deg)' }} />
              <Typography variant="h5">{section.title}</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'var(--muted-foreground)', lineHeight: 1.8, mb: 4 }}>
              {section.content}
            </Typography>
          </Box>
        ))}

        {/* Technical Note Example */}
        <Box sx={{ p: 4, borderLeft: '4px solid var(--primary)', bgcolor: 'rgba(0, 217, 255, 0.05)', mb: 8 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'var(--foreground)', mb: 1 }}>
            TECHNICAL PROTOCOL:
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--muted-foreground)' }}>
            All data processed through {tool.name} is subject to high-entropy randomization to prevent pattern recognition by automated forensic scanners.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ToolDetail;
