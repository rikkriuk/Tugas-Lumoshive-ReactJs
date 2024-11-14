import React from "react";
import OurWorkComponent from "../components/OurWork/OurWorkComponent";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaTemplate from "../components/Meta/MetaComponent";

const PortofolioContainer = () => {
   return (
        <>
            <MetaTemplate
                title="Portfolio - Our Work"
                description="Explore our portfolio of completed projects and case studies."
                keywords="portfolio, projects, case studies, web design, development"
            />
            <AboutComponent title={"Portfolio"} subtitle={"Home / Portfolio"} />
            <OurWorkComponent />
            <BannerComponent />    
        </>
    )
}

export default PortofolioContainer;