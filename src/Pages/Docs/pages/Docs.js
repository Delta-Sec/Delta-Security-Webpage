import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid, Card, CardContent, Chip } from '@mui/material';
import { Lock, Eye, ShieldAlert, Zap, ArrowRight, Code } from 'lucide-react';

const tools = [
  {
    id: "stegx",
    name: "StegX",
    description: "Secure LSB Steganography Tool with AES-256-GCM Encryption",
    icon: Lock,
    color: "linear-gradient(135deg, #00bcd4, #2196f3)",
    path: "/stegx",
    image: "/images/stegx-card.jpg",
    features: ["LSB Embedding", "AES-256-GCM", "scrypt KDF", "PNG Support"],
    status: "v1.2.0"
  },
  {
    id: "spyeye",
    name: "SpyEye",
    description: "Hybrid Network Attack Framework with Hardware-Accelerated ESP32",
    icon: Eye,
    color: "linear-gradient(135deg, #f44336, #e91e63)",
    path: "/spyeye",
    image: "/images/spyeye-card.jpg",
    features: ["Rogue AP", "Credential Harvesting", "PMKID Capture", "C2 Framework"],
    status: "v2.0.0"
  },
  {
    id: "falcon",
    name: "Falcon Defender",
    description: "Daemon-Powered Cybersecurity Ecosystem with YARA Signatures",
    icon: ShieldAlert,
    color: "linear-gradient(135deg, #4caf50, #009688)",
    path: "/falcon",
    image: "/images/falcon-card.jpg",
    features: ["Real-time Monitoring", "YARA Engine", "Quarantine System", "Automated Response"],
    status: "v2.0.0"
  },
  {
    id: "zshark",
    name: "Z-Shark",
    description: "Mathematical Network Forensics Platform with FFT & Entropy Analysis",
    icon: Zap,
    color: "linear-gradient(135deg, #2196f3, #00bcd4)",
    path: "/z-shark",
    image: "/images/zshark-card.jpg",
    features: ["FFT Analysis", "Shannon Entropy", "Z-Score Detection", "Anomaly Detection"],
    status: "v2.1.1"
  }
];

const Docs = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)', py: { xs: 10, md: 15 } }}>
        <Box sx={{ position: 'absolute', inset: 0, opacity: 0.05, zIndex: 0 }}>
          <Box sx={{ position: 'absolute', top: '10%', right: '10%', width: 400, height: 400, bgcolor: 'var(--primary)', borderRadius: '50%', filter: 'blur(100px)' }} />
          <Box sx={{ position: 'absolute', bottom: '10%', left: '10%', width: 400, height: 400, bgcolor: 'var(--primary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5 }} />
        </Box>
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ mb: 3 }}>
            <Typography 
              component="span" 
              sx={{ 
                px: 2, py: 1, fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary)', 
                bgcolor: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.2)',
                letterSpacing: 2, textTransform: 'uppercase'
              }}
            >
              Cybersecurity Tools
            </Typography>
          </Box>
          
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3, lineHeight: 1.1 }}>
            Delta-Sec Cyber Tools Wiki
          </Typography>
          
          <Typography variant="h6" sx={{ color: 'var(--muted-foreground)', mb: 5, fontWeight: 300, lineHeight: 1.6 }}>
            A comprehensive documentation hub for advanced cybersecurity tools. Explore steganography, network attacks, threat detection, and network forensics—all engineered by Delta-Sec for security professionals.
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button 
              variant="contained" 
              href="#tools"
              sx={{ 
                bgcolor: 'var(--primary)', color: 'var(--primary-foreground)', fontWeight: 'bold', px: 4, py: 1.5,
                '&:hover': { bgcolor: 'rgba(0, 217, 255, 0.8)' }, borderRadius: 0
              }}
              endIcon={<ArrowRight size={18} />}
            >
              Explore Tools
            </Button>
            <Button 
              variant="outlined" 
              href="https://github.com/Delta-Sec"
              target="_blank"
              sx={{ 
                borderColor: 'var(--border)', color: 'var(--foreground)', fontWeight: 'bold', px: 4, py: 1.5,
                '&:hover': { borderColor: 'var(--primary)', bgcolor: 'rgba(255,255,255,0.05)' }, borderRadius: 0
              }}
              startIcon={<Code size={18} />}
            >
              View on GitHub
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Tools Grid */}
      <Container id="tools" maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Featured Tools</Typography>
          <Typography variant="body1" sx={{ color: 'var(--muted-foreground)' }}>
            Professional-grade security tools for advanced threat analysis and system protection.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Grid item xs={12} md={6} key={tool.id}>
                <Card 
                  component={Link} 
                  to={tool.path}
                  sx={{ 
                    height: '100%', display: 'flex', flexDirection: 'column', position: 'relative',
                    bgcolor: 'rgba(18, 31, 31, 0.3)', border: '1px solid var(--border)', borderRadius: 0,
                    textDecoration: 'none', transition: 'all 0.3s', overflow: 'hidden',
                    '&:hover': { bgcolor: 'rgba(18, 31, 31, 0.5)', borderColor: 'var(--primary)' },
                    '&:hover .tool-img': { opacity: 0.25 },
                    '&:hover .tool-arrow': { transform: 'translateX(8px)' }
                  }}
                >
                  <Box 
                    className="tool-img"
                    component="img" 
                    src={tool.image} 
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectCover: 'cover', opacity: 0.15, transition: 'opacity 0.3s' }} 
                  />
                  <CardContent sx={{ position: 'relative', zIndex: 1, p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                      <Box sx={{ p: 1.5, background: tool.color, display: 'flex', borderRadius: 0 }}>
                        <Icon size={24} color="white" />
                      </Box>
                      <Typography variant="caption" sx={{ fontFamily: 'var(--font-mono)', color: 'var(--muted-foreground)', bgcolor: 'rgba(255,255,255,0.05)', px: 1, py: 0.5 }}>
                        {tool.status}
                      </Typography>
                    </Box>
                    
                    <Typography variant="h5" sx={{ mb: 1.5, color: 'var(--foreground)' }}>{tool.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'var(--muted-foreground)', mb: 4, minHeight: 40 }}>{tool.description}</Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                      {tool.features.map(feature => (
                        <Chip 
                          key={feature} 
                          label={feature} 
                          size="small" 
                          sx={{ 
                            borderRadius: 0, bgcolor: 'rgba(0, 217, 255, 0.1)', color: 'var(--primary)', 
                            border: '1px solid rgba(0, 217, 255, 0.2)', fontSize: '0.7rem' 
                          }} 
                        />
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'var(--primary)', fontWeight: 'bold' }}>
                      <Typography variant="button">Read Documentation</Typography>
                      <ArrowRight size={18} className="tool-arrow" style={{ transition: 'transform 0.3s' }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'rgba(18, 31, 31, 0.2)', borderTop: '1px solid var(--border)', py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ mb: 10 }}>Why Choose Delta-Sec Tools?</Typography>
          <Grid container spacing={6}>
            {[
              { icon: Lock, title: "Military-Grade Security", desc: "AES-256-GCM encryption, scrypt key derivation, and cryptographic authentication." },
              { icon: Zap, title: "High Performance", desc: "Hardware-accelerated attacks, concurrent scanning, and real-time monitoring." },
              { icon: Code, title: "Open Source", desc: "Fully transparent code, community-driven development, and continuous improvements." }
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx} sx={{ textAlign: 'center' }}>
                <Box sx={{ width: 60, height: 60, bgcolor: 'rgba(0, 217, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                  <item.icon size={30} color="var(--primary)" />
                </Box>
                <Typography variant="h6" sx={{ mb: 2 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: 'var(--muted-foreground)' }}>{item.desc}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Docs;
