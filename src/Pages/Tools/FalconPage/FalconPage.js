import React from 'react';
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import Footer from "../../../SharedComponents/Footer/Footer";
import FalconDefenderIcon from "../../../GlobalAssets/Icons/FalconDefenderIcon";
import { FalconHero, FalconFeatures, FalconRequirements } from "./Sections/FalconComponents";
import { Box, Divider, Typography } from "@mui/material";

export default function FalconPage() {
  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <NavBar ThemeColor="var(--falcon-defender-color)">
        <Box sx={{ display: "flex", gap: "15px", alignItems: "center", justifyContent: "center", margin: "0 15px" }}>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ borderColor: "var(--border-color)", height: "25px", alignSelf: "center" }}
          />
          <Box sx={{ cursor: "pointer", display: "flex" }}>
            <FalconDefenderIcon widthSize="20px" fillColor={"var(--falcon-defender-color)"} />
          </Box>
          <Typography
            sx={{
              margin: "0px",
              fontFamily: "orbitron",
              fontSize: "14px",
              fontWeight: "600",
              width: "150px",
              textAlign: "left",
              color: "#fff"
            }}
          >
            FALCON DEFENDER
          </Typography>
        </Box>
      </NavBar>

      <main>
        <FalconHero />
        <FalconFeatures />
        <FalconRequirements />
      </main>

      <Footer />
    </Box>
  );
}
