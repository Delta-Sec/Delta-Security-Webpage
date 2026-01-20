import React from 'react';
import NavBar from "../../SharedComponents/NavBar/NavBar";
import Footer from "../../SharedComponents/Footer/Footer";
import { HomeHero, HomeFeatures } from "./Sections/HomeSections";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <NavBar ThemeColor="var(--delta-sec-color)" />
      
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
