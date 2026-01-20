import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import TerminalIcon from '@mui/icons-material/Terminal';
import './HomeSections.css';

export const HomeHero = () => {
  return (
    <Box className="home-hero">
      <Container maxWidth="lg">
        <Box className="hero-content">
          <Typography variant="h1" className="glitch-text" data-text="DELTA SEC">
            DELTA SEC
          </Typography>
          <Typography variant="h4" className="hero-subtitle">
            Advanced Cybersecurity Solutions for the Modern Era
          </Typography>
          <Typography variant="body1" className="hero-description">
            Empowering security professionals with cutting-edge tools for network forensics, 
            steganography, and system defense.
          </Typography>
          <Box className="hero-btns">
            <Button component={Link} to="/spyeye" className="primary-btn">Explore Tools</Button>
            <Button component={Link} to="/about" className="secondary-btn">Learn More</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const HomeFeatures = () => {
  const features = [
    {
      title: "Network Forensics",
      desc: "Deep packet inspection and traffic analysis with Z-Shark.",
      icon: <SearchIcon fontSize="large" />,
      color: "var(--z-shark-color)"
    },
    {
      title: "Steganography",
      desc: "Secure data hiding and extraction using Steg-X.",
      icon: <LockIcon fontSize="large" />,
      color: "var(--steg-x-color)"
    },
    {
      title: "System Defense",
      desc: "Proactive threat detection with Falcon Defender.",
      icon: <ShieldIcon fontSize="large" />,
      color: "var(--falcon-defender-color)"
    },
    {
      title: "Security Auditing",
      desc: "Comprehensive vulnerability assessment with Spy-Eye.",
      icon: <TerminalIcon fontSize="large" />,
      color: "var(--spy-eye-color)"
    }
  ];

  return (
    <Container maxWidth="lg" className="home-features">
      <Typography variant="h2" className="section-title">Core Capabilities</Typography>
      <Grid container spacing={4}>
        {features.map((f, i) => (
          <Grid item xs={12} md={6} lg={3} key={i}>
            <Box className="feature-card-home" style={{ '--card-color': f.color }}>
              <Box className="feature-icon-home">{f.icon}</Box>
              <Typography variant="h5">{f.title}</Typography>
              <Typography variant="body2">{f.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
