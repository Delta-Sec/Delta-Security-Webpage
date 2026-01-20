//============= CSS IMPORTS =============//
import "./StegXPage.css";

//========== COMPONENT IMPORTS ==========//
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import StegXIcon from "../../../GlobalAssets/Icons/StegXIcon";

import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import StegXHero from "./Sections/StegXHero/StegXHero";
import StegXSteps from "./Sections/StegXSteps/StegXSteps";
import StegXDropZone from "./Sections/StegXDropZone/StegXDropZone";
import Footer from "../../../SharedComponents/Footer/Footer";
import YellowBackground from "../../../GlobalAssets/YellowBackground";

export default function StegXPage() {
  return (
    <YellowBackground>
    <div style={{display:"flex", flexDirection:"column", gap:"40px"}}>
      <NavBar ThemeColor="var(--steg-x-color)">
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 15px",
          }}
        >
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              borderColor: "var(--border-color)",
              height: "25px",
              alignSelf: "center",
            }}
          />
          <div style={{ cursor: "pointer", display: "flex" }}>
            <StegXIcon widthSize="25px" fillColor={"var(--steg-x-color)"} />
          </div>
          <p
            style={{
              margin: "0px",
              fontFamily: "orbitron",
              fontSize: "20px",
              fontWeight: "600",
              width: "150px",
              textAlign: "left",
            }}
          >
            STEG X
          </p>
        </div>
      </NavBar>
      <Container maxWidth="lg">

        <section style={{ paddingTop: "20px" }}>
          <StegXHero />
        </section>

        <section>
          <StegXSteps/>
        </section>

        <section>
          <StegXDropZone/>
        </section>

      </Container>

      <Footer/>
    </div></YellowBackground>
  );
}
