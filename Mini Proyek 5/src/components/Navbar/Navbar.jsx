import React from "react";
import "./Navbar.css"

const Navbar = () => {
   return (
      <> 
         <header id="header">
            <nav>
               <h1>Mini Proyek 5</h1>
            </nav>

            <div className="settings">
               <button className="theme-btn">
                  <i class="bi bi-moon-stars"></i>
                  Dark Mode
               </button>
               <button className="language-btn">
                  <i class="bi bi-translate"></i>
                  Indonesia
               </button>
            </div>
         </header>
      </>
   )
}

export default Navbar;