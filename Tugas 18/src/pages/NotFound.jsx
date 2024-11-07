import { useContext } from "react";
import { LanguageContext } from "../App";

const NotFound = () => {
   const { language } = useContext(LanguageContext);

   return (
      <div className="container d-flex justify-content-center align-items-center mt-5">
         <p>{language === "en" ? "Page not found" : "Halaman tidak ditemukan"}</p>
      </div>
   )
}

export default NotFound;