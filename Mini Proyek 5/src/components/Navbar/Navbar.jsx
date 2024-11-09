import React, { useContext } from "react";
import "./Navbar.css"
import { LanguageContext } from "../../App";

const Navbar = () => {
   const {language, onChangeLanguage} = useContext(LanguageContext);
   return (
      <> 
         <header id="header">
            <nav>
               <h1>Mini Proyek 5</h1>
            </nav>

            <div className="settings">
               <button className="theme-btn">
                  <i className="bi bi-moon-stars"></i>
                  {language === "en" ? "Dark Mode" : "Mode Gelap"}
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