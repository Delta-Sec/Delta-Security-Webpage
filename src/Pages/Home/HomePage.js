import React from 'react';
import NavBar from "../../SharedComponents/NavBar/NavBar";
import Footer from "../../SharedComponents/Footer/Footer";
import { HomeHero, HomeFeatures } from "./Sections/HomeSections";
import { Box } from "@mui/material";
import DocsDropDownList from '../../SharedComponents/DocsDropDownList/DocsDropDownList';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';

const homeDocs = {
  title: "Documentation",
  toolColor: "var(--delta-sec-color)",
  hoverBg: "rgba(0, 212, 255, 0.05)",
  items: [
    { icon: HomeIcon, title: "Main", desc: "Welcome to DeltaSec!" },
    { icon: HandymanIcon, title: "Our Tools", desc: "Discover Our Tools!" },

  ]
};

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <NavBar ThemeColor="var(--delta-sec-color)" DocsCards={<DocsDropDownList {...homeDocs} />}/>
      
      <main>
        <HomeHero />
        <Box sx={{ py: 10 }}>
          <HomeFeatures />
        </Box>
      </main>

      <Footer />
    </Box>
  );
}
