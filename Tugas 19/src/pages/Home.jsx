import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ListContainer from "../containers/ListContainer";
import Footer from "../components/Footer";

const Home = () => {
   return (
      <>
         <Navbar />
         <main>
            <Banner />
            <ListContainer />
         </main>
         <Footer />
      </>
   )
}

export default Home;