import React from "react";
import Loading from "../../assets/loading.svg"
import "./Loading.css"

const LoadingSvg = () => {
   return (
      <div className="loading-svg">
         <img className="loading" src={Loading} alt="loading" />
      </div>
   )
}

export default LoadingSvg;