import React from "react";
import About from "../components/About/AboutComponent";
import AboutUS from "../components/AboutUs/AboutUsComponent";
import Card from "../components/Card/CardComponent";
import { leadersData } from "../utils/data";
import BannerComponent from "../components/Banner/BannerComponent";
import MetaTemplate from "../components/Meta/MetaComponent";
import SchemaMarkup from "../components/SchemaMarkup/SchemaMarkup";

const AboutContainer = () => {
  
  return (
    <div>
      <MetaTemplate
        title="About Us"
        description="Learn more about our company and mission."
        keywords="about us, company, mission"
      />

      <SchemaMarkup
        organizationName="Logoipsum"
        description="One of the Fastest Way to Business Growth"
        phone="+1 (555) 123-4567"
        teamMembers={leadersData}
      />

      <About title="About" subtitle="Home / About" />
      <AboutUS />
      <Card leadersData={[...leadersData, ...leadersData]} />
      <BannerComponent />
    </div>
  );
};

export default AboutContainer;
