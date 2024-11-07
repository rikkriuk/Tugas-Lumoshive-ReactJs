import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import ActivityDetail from "./pages/ActivityDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (language) => {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider value={{language, setLanguage: handleChangeLanguage}}>
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
    </LanguageContext.Provider>
  );
};

export default App;
