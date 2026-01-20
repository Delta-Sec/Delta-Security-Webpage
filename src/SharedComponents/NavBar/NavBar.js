import { useState, useEffect } from "react";
import DeltaSecIcon from "../../GlobalAssets/Icons/DeltaSecIcon";
import "./NavBar.css";
import ContactButton from "../../SharedComponents/ContactButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ToolsDropDownList from "../ToolsDropDownList/ToolsDropDownList";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Link } from "react-router-dom";


export default function NavBar({ ThemeColor, children, DocsCards }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false); // الحالة الخاصة بالـ Docs

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsToolsOpen(false);
    setIsDocsOpen(false);
  };

  const toggleTools = (e) => {
    e.stopPropagation();
    setIsToolsOpen(!isToolsOpen);
    if (isDocsOpen) setIsDocsOpen(false);
  };

  const toggleDocs = (e) => {
    e.stopPropagation();
    setIsDocsOpen(!isDocsOpen);
    if (isToolsOpen) setIsToolsOpen(false);
  };

  const currentToolColor = ThemeColor;

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // إذا نزلنا للأسفل وتجاوزنا 100px -> إخفاء
        setIsVisible(false);
        // إغلاق القوائم المنسدلة عند الإخفاء لترتيب الشكل
        setIsMenuOpen(false);
        setIsToolsOpen(false);
        setIsDocsOpen(false);
      } else {
        // إذا صعدنا للأعلى -> إظهار
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);
  return (
    <>
    <nav
      className={`navContainer ${!isVisible ? "nav-hidden" : ""}`}
      style={{ "--active-color": currentToolColor }}
    >
      <div className="websiteLogo">
        <Link to={"/"}><DeltaSecIcon className="delta-sec-icon" widthSize={"27px"} /></Link>
        {children}
      </div>

      <div className={`navBarLinks ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <Link to={'/'}><li onClick={closeAll}>Home</li></Link>

          <div className="tools-wrapper dropdown-wrapper">
            <li className="tools-trigger" onClick={toggleTools}>
              <ExpandMoreIcon
                className={`arrow-icon ${isToolsOpen ? "rotate" : ""}`}
              />
              Tools
            </li>
            <div
              className={`dropdown-container ${isToolsOpen ? "is-open" : ""}`}
            >
              <div className="dropdown-inner">
                <ToolsDropDownList />
              </div>
            </div>
          </div>

          {/* قائمة الـ Docs الجديدة */}
          <div className="docs-wrapper dropdown-wrapper">
            <li className="docs-trigger" onClick={toggleDocs}>
              <ExpandMoreIcon
                className={`arrow-icon ${isDocsOpen ? "rotate" : ""}`}
              />
              Docs
            </li>

            <div
              className={`
              
              dropdown-container ${isDocsOpen ? "is-open" : ""}`}
            >
              <div className="dropdown-inner">{DocsCards}</div>
            </div>
          </div>

          <Link to={"/faq"}><li onClick={closeAll}>FAQ</li></Link>
          
          <Link to={"/about"}><li onClick={closeAll}>About Us</li></Link>
        </ul>
      </div>

      <div className="contactButton">
        <ContactButton ThemeColor={ThemeColor} />
      </div>

      <MenuSharpIcon
        className={`MenuIcon ${isMenuOpen ? "icon-active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
    </>
  );
}
