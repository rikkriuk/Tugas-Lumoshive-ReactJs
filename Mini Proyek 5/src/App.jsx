import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListContainer from "./containers/ListContainer";
import Layout from "./containers/Layout";
import FormContainer from "./containers/FormContainer";
import NotFoundPage from "./components/NotFound/NotFound";

export const LanguageContext = createContext();

const App = () => {
  let settings = JSON.parse(localStorage.getItem("settings")) || {};
  const [language, setLanguage] = useState(settings.language || "en");

  const onChangeLanguage = () => {
    setLanguage(() => {
    const newLanguage = language === "en" ? "id" : "en"
    settings = {
      language: newLanguage,
    }
    return newLanguage;
  });
  localStorage.setItem("settings", JSON.stringify(settings))
  }

  return (
    <LanguageContext.Provider value={{language, onChangeLanguage}}>
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
    </LanguageContext.Provider>
  )
}

export default App;