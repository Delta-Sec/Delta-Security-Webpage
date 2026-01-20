//============= CSS IMPORTS =============//
import "./SpyEyePage.css";
import WavesBackground from "../../../GlobalAssets/WavesBackground";

//========== COMPONENT IMPORTS ==========//
import NavBar from "../../../SharedComponents/NavBar/NavBar";
import DocsDropDownList from "../../../Pages/Tools/SpyEyePage/DocsDropDownList/DocsDropDownList";
import SpyEyeIconAnimation from "../../../GlobalAssets/Animation/SpyEyeIconAnimation/SpyEyeIconAnimation";
import Divider from "@mui/material/Divider";
import Footer from "../../../SharedComponents/Footer/Footer";
import SpyEyeHeroSection from "./Sections/SpyEyeHeroSection";
import Container from "@mui/material/Container";
import ArchSection from "./Sections/ArchSection";
import Features from "./Sections/Features";
import HowItWorks from "./Sections/HowItWorks";
import ReqTable from "./Sections/ReqTable";
import Disclaimer from "./Sections/Disclaimer";

export default function SpyEyePage() {
  return (
    <WavesBackground>
      <div>
        <div style={{ zIndex: "1" }}>
          <NavBar
            ThemeColor="var(--spy-eye-color)"
            DocsCards={<DocsDropDownList />}
          >
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
                <SpyEyeIconAnimation widthSize="35px" />
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
                SPY EYE
              </p>
            </div>
          </NavBar>

          <Container
            style={{ display: "flex", flexDirection: "column", gap: "80px" }}
          >
            <section style={{ marginTop: "40px" }}>
              <SpyEyeHeroSection />
            </section>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--border-color)",
                opacity: "0.3",
              }}
            ></div>
            <section>
              <ArchSection />
            </section>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--border-color)",
                opacity: "0.3",
              }}
            ></div>
            <section>
              <Features />
            </section>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--border-color)",
                opacity: "0.3",
              }}
            ></div>

            <section>
              <HowItWorks />
            </section>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--border-color)",
                opacity: "0.3",
              }}
            ></div>

            <section>
              <ReqTable />
            </section>

            <section>
              <Disclaimer />
            </section>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--border-color)",
                opacity: "0.3",
              }}
            ></div>
          </Container>
          <footer>
            <Footer />
          </footer>
          <div></div>
        </div>
      </div>
    </WavesBackground>
  );
}
