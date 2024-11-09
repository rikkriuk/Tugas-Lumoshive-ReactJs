import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListContainer from "./containers/ListContainer";
import Layout from "./containers/Layout";
import FormContainer from "./containers/FormContainer";
import NotFoundPage from "./components/NotFound/NotFound";

export const LanguageContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  let settings = JSON.parse(localStorage.getItem("settings")) || {};
  const [language, setLanguage] = useState(settings.language || "en");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (settings.isDarkMode !== undefined) {
      return settings.isDarkMode;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  })

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const onChangeLanguage = () => {
    const newLanguage = language === "en" ? "id" : "en";
    setLanguage(newLanguage);
  }

  useEffect(() => {
    settings = { language, isDarkMode };
    localStorage.setItem("settings", JSON.stringify(settings));

    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }, [language, isDarkMode])

  return (
    <LanguageContext.Provider value={{language, onChangeLanguage}}>
      <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<ListContainer />} />
              <Route path="/add" element={<FormContainer />} />
              <Route path="/edit/:id" element={<FormContainer />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App;