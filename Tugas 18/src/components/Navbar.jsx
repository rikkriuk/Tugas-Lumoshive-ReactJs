import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Navbar = () => {
   const { language, setLanguage } = useContext(LanguageContext);
   return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">{language === "en" ? "Activity" : "Aktivitas"}</a>
                <button onClick={() => setLanguage(language === "en" ? "id" : "en")} className="btn btn-outline-primary">
                    {language === "en" ? "English" : "Indonesia"}
                </button>
            </div>
        </nav>
   );
}

export default Navbar;
