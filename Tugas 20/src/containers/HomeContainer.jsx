import React from "react";
import HeroComponent from "../components/Hero/HeroComponent";
import AboutUsComponent from "../components/AboutUs/AboutUsComponent";
import TitlePageComponent from "../components/TitlePage/TitlePageComponent";
import HeroServiceSection from "../components/Services/HeroServiceComponent";
import ExpertiseSection from "../components/Services/ExperticeComponent";
import CardComponent from "../components/Card/CardComponent";
import { planingData, servicesData, leadersData } from "../utils/data";
import FormContactComponent from "../components/Contact/FormContactComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import TestimonialComponent from "../components/Testimonial/TestimonialComponent";
import BlogBottomComponenet from "../components/BlogBottom/BlogBottomComponent";
import MetaTemplate from "../components/Meta/MetaComponent";

const HomeContainer = () => {

   return (
        <>
            <MetaTemplate
                title="Home - Welcome to Our Website"
                description="Discover our services, portfolio, and more on our homepage."
                keywords="home, welcome, website, services, portfolio"
            />
            <HeroComponent />
            <AboutUsComponent />
            <TitlePageComponent title={"Planning"} description={"Our Work"} />
            <ExpertiseSection services={planingData}/>
            <HeroServiceSection page={"home"}/>
            <TitlePageComponent title={"Services"} description={"Our Expertice"} />
            <ExpertiseSection services={servicesData}/>
            <TestimonialComponent />
            <CardComponent leadersData={leadersData}/>
            <div className="bg-color-container-contact">
                <FormContactComponent page={"home"}/>
            </div>
            <TitlePageComponent title={"Our Blog"} description={"Latest Post"} />
            <BlogBottomComponenet />
            <BannerComponent />
        </>
    )
}

export default HomeContainer;