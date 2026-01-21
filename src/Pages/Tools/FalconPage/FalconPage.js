import React from 'react';
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import Footer from "../../../SharedComponents/Footer/Footer";
import FalconDefenderIcon from "../../../GlobalAssets/Icons/FalconDefenderIcon";
import { FalconHero, FalconFeatures, FalconRequirements } from "./Sections/FalconComponents";
import { Box, Divider, Typography } from "@mui/material";
import StepsSlider from './Sections/StepsSlider/StepsSlider';
import ShieldIcon from '@mui/icons-material/Shield'; 
import FolderIcon from '@mui/icons-material/Folder';
import StorageIcon from '@mui/icons-material/Storage';
import DownloadIcon from '@mui/icons-material/Download';
import DocsDropDownList from "../../../SharedComponents/DocsDropDownList/DocsDropDownList";

const falconDocs = {
  title: "Falcon Documentation",
  toolColor: "#15b24b",
  hoverBg: "rgba(21, 178, 75, 0.05)",
  items: [
    { icon: ShieldIcon, title: "Scanning Guide", desc: "Deep signature analysis" },
    { icon: FolderIcon, title: "Quarantine", desc: "Managing isolated threats" },
    { icon: StorageIcon, title: "Signatures", desc: "Database updates" },
    { icon: DownloadIcon, title: "Setup", desc: "EXE & Script installation" }
  ]
};

export default function FalconPage() {
  return (
    <Box sx={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <NavBar ThemeColor="var(--falcon-defender-color)" DocsCards={<DocsDropDownList {...falconDocs}/>}>
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
        <StepsSlider/>
        <FalconRequirements />
      </main>

      <Footer />
    </Box>
  );
}
