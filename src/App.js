//============= CSS IMPORTS =============//
import "./App.css";

//============ PAGES IMPORTS ============//
import HomePage from "./Pages/Home/HomePage";
import SpyEyePage from "./Pages/Tools/SpyEyePage/SpyEyePage";
import StegXPage from "./Pages/Tools/StegXPage/StegXPage";
import FalconPage from "./Pages/Tools/FalconPage/FalconPage";
import ZSharkPage from "./Pages/Tools/ZSharkPage/ZSharkPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
//============ REACT IMPORTS ============//
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import Chatbot from "./SharedComponents/ChatBot";
import Docs from "./Pages/Docs/pages/Docs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spyeye" element={<SpyEyePage />} />
          <Route path="/stegx" element={<StegXPage />} />
          <Route path="/zshark" element={<ZSharkPage />} />
          <Route path="/falcondefender" element={<FalconPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/docs" element={<Docs />} />
          <Route
            path="*"
            element={
              <div style={{ color: "white", textAlign: "center", mt: 10 }}>
                <p>Page Not Found</p>
                <p>
                  return to <Link to={"/"}>HomePage</Link>
                </p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Chatbot />
    </div>
  );
}

export default App;
