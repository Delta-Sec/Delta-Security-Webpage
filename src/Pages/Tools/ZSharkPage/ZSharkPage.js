//============= CSS IMPORTS =============//
import "./ZSharkPage.css";

//========== COMPONENT IMPORTS ==========//
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import ZSharkIcon from "../../../GlobalAssets/Icons/ZSharkIcon";
import { Divider, Container } from "@mui/material";
import Footer from "../../../SharedComponents/Footer/Footer";
import ZSharkHero from "./Sections/ZSharkHero/ZSharkHero";
import ZSharkDropZone from "./Sections/ZSharkDropZone/ZSharkDropZone";
import ZSharkFeatures from "./Sections/ZSharkFeatures/ZSharkFeatures";



export default function ZSharkPage() {
  return (
    <div>
      <NavBar ThemeColor="var(--z-shark-color)">
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
            <ZSharkIcon widthSize="25px" fillColor={"var(--z-shark-color)"} />
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
            Z SHARK
          </p>
        </div>
      </NavBar>

      <Container maxWidth="lg">
        <section style={{ paddingTop: "20px" }}>
          <ZSharkHero />
        </section>

        <div
          style={{
            width: "100%",
            height: "0.5px",
            backgroundColor: "var(--border-color)",
            margin: "60px 0",
          }}
        ></div>

        <section>
          <ZSharkFeatures />
        </section>

        <div
          style={{
            width: "100%",
            height: "0.5px",
            backgroundColor: "var(--border-color)",
            margin: "60px 0",
          }}
        ></div>

        <section style={{ margin: "40px 0" }}>
          <ZSharkDropZone />
        </section>
      </Container>

      <Footer />
    </div>
  );
}
