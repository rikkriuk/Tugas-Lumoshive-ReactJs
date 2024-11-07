import React, { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";

const Navbar = () => {
   const { language, setLanguage } = useContext(LanguageContext);
   const { theme, toggleTheme } = useContext(ThemeContext);

   return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-1 border-light">
            <div className="container">
                <a className="navbar-brand" href="/">{language === "en" ? "Activity" : "Aktivitas"}</a>
                <div>
                  <button onClick={toggleTheme} className="btn btn-outline-secondary me-2">
                        {theme === "light" ? (
                        <>
                           <i className="bi bi-moon"></i>
                           <span className="ms-2">{language === "en" ? "Dark Mode" : "Mode Malam"}</span>
                        </>
                        ) : (
                        <>
                           <i className="bi bi-sun"></i>
                           <span className="ms-2">{language === "en" ? "Light Mode" : "Mode Siang"}</span>
                        </>
                        )}
                  </button>
                  <button onClick={() => setLanguage(language === "en" ? "id" : "en")} className="btn btn-outline-primary">
                     {language === "en" ? "English" : "Indonesia"}
                  </button>
                </div>
            </div>
        </nav>
   );
}

export default Navbar;
