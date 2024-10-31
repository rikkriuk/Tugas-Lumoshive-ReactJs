import React from "react";

export default function Navbar({ darkMode, toggleDarkMode, handleLogout }) {
   return (
      <nav className="navbar bg-primary border-bottom shadow">
         <div className="container">
            <h1 className="navbar-brand text-white m-0" href="#">
               <i className="bi bi-robot me-1"></i>
               LumoshiveAI
            </h1>
            <div>
               { darkMode ? (
                  <button onClick={toggleDarkMode} className="btn bg-dark text-white">
                     <i className="bi bi-sun-fill me-2 me-2"></i>
                     Light
                  </button>
               ) : (
                  <button onClick={toggleDarkMode} className="btn bg-dark text-white">
                     <i className="bi bi-moon-stars-fill me-2"></i>
                     Dark
                  </button>
               )}
               <button onClick={handleLogout} className="btn btn-danger ms-2">
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Logout
               </button>
            </div>
         </div>
      </nav>
   )
}