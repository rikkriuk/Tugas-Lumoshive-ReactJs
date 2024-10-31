import React from "react";

export default function LoadingMessage({ darkMode }) {
   return (
      <div className={`container d-flex justify-content-center pt-5 message-cstm ${darkMode && "text-light"}`}>
            <h4 className="text-sm" href="#">
               <i className={`bi bi-robot me-1 ${darkMode && "text-light"}`}></i>
               AI is thinking...
            </h4>
      </div>
   )
}