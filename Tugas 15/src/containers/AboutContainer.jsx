import React, { Component } from "react";
import About from "../components/About";
import Footer from "../components/Footer";

export default class AboutContainer extends Component {
   render() {
      return (
         <>
            <main className="bg-color min-h-80">
               <About />
            </main>
            <Footer />
         </>
      );
   }
}