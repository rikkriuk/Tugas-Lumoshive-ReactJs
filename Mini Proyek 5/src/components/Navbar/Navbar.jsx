import React, { useContext } from "react";
import "./Navbar.css"
import { LanguageContext, ThemeContext } from "../../App";
import { Link } from "react-router-dom";

const Navbar = () => {
   const {language, onChangeLanguage} = useContext(LanguageContext);
   const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);
   return (
      <> 
         <header id="header">
            <nav>
               <Link className="home" to={"/"}>Mini Proyek 5</Link>
            </nav>

            <div className="settings">
               <button onClick={toggleDarkMode} className="theme-btn">
                  <i className={`bi ${isDarkMode ? "bi-brightness-low-fill" : "bi-moon-stars"}`}></i>
                  {language === "en" ? (isDarkMode ? "Mode Gelap" : "Mode Terang") : (isDarkMode ? "Dark Mode" : "Light Mode")}
               </button>
               <button onClick={onChangeLanguage} className="language-btn">
                  <i className="bi bi-translate"></i>
                  {language === "en" ? "English" : "Indonesia"}
               </button>
            </div>
         </header>
      </>
   )
}

export default Navbar;