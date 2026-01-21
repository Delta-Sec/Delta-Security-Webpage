import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, IconButton } from '@mui/material';
import { Github } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'rgba(10, 20, 20, 0.8)', 
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border)',
          boxShadow: 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ width: 32, height: 32, bgcolor: 'var(--primary)', transform: 'skewX(-12deg)' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
                DELTA-SEC WIKI
              </Typography>
            </Box>
            <IconButton 
              component="a" 
              href="https://github.com/Delta-Sec" 
              target="_blank" 
              sx={{ color: 'var(--muted-foreground)', '&:hover': { color: 'var(--primary)' } }}
            >
              <Github size={20} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: 6, 
          borderTop: '1px solid var(--border)', 
          bgcolor: 'rgba(18, 31, 31, 0.3)',
          mt: 'auto'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4, mb: 4 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: 'var(--foreground)' }}>TOOLS</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link to="/stegx" className="footer-link">StegX</Link>
                <Link to="/spyeye" className="footer-link">SpyEye</Link>
                <Link to="/falcon" className="footer-link">Falcon Defender</Link>
                <Link to="/z-shark" className="footer-link">Z-Shark</Link>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: 'var(--foreground)' }}>RESOURCES</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <a href="https://github.com/Delta-Sec" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
                <a href="#" className="footer-link">StegX Wiki</a>
                <a href="#" className="footer-link">SpyEye Repo</a>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: 'var(--foreground)' }}>COMMUNITY</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <a href="#" className="footer-link">Contribute</a>
                <a href="#" className="footer-link">Issues</a>
                <a href="#" className="footer-link">Discussions</a>
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, color: 'var(--foreground)' }}>LEGAL</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <a href="#" className="footer-link">License</a>
                <a href="#" className="footer-link">Terms</a>
                <a href="#" className="footer-link">Security</a>
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: 4, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
            <Typography variant="body2">© 2025 Delta-Sec. All rights reserved.</Typography>
            <Typography variant="body2">Crafted with security in mind</Typography>
          </Box>
        </Container>
      </Box>

      <style>{`
        .footer-link {
          font-size: 0.875rem;
          color: var(--muted-foreground);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--primary);
        }
      `}</style>
    </Box>
  );
};

export default Layout;
