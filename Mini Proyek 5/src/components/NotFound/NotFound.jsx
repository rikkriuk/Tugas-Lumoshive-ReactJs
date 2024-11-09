import React, { useContext } from "react";
import PropTypes from "prop-types";
import NotFoundPng from "../../assets/404-error.png";
import "./NotFound.css"
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../App";

const NotFoundPage = ({ text }) => {
   const {language} = useContext(LanguageContext);
   const navigate = useNavigate();
   const defaultText = text || (language === "en" ? "Page not found" : "Halaman tidak ditemukan");

   return (
      <div className="not-found">
         <img src={NotFoundPng} alt="not-found" />
         <p>{defaultText}</p>
         <button onClick={() => navigate("/")} className="back-btn">
            <i className="bi bi-backspace"></i>
            {language === "en" ? "Back" : "Kembali"}
         </button>
      </div>
   )
}

NotFoundPage.propTypes = {
   text: PropTypes.string,
}

export default NotFoundPage;