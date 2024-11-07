import React, { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

export const LanguageContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  const handleChangeLanguage = (language) => {
    setLanguage(language);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <LanguageContext.Provider value={{language, setLanguage: handleChangeLanguage}}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Navbar />
        <div className="container">
          <Router>
              
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activity/:id" element={<ActivityDetail />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
