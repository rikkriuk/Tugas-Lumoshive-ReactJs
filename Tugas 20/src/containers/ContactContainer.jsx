import React from "react";
import "../components/Contact/FormContactStyles.css";
import AboutComponent from "../components/About/AboutComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import FormContactComponent from "../components/Contact/FormContactComponent";
import MetaTemplate from "../components/Meta/MetaComponent";

const ContactContainer = () => {
  return (
    <>
      <MetaTemplate
        title="Contact Us"
        description="Get in touch with us for inquiries, support, or any questions you may have."
        keywords="contact, support, inquiries, contact us, get in touch"
      />
      <AboutComponent title="Contact" subtitle="Home / Contact" />
      <div className="bg-color-container-contact">
        <FormContactComponent />
      </div>
      <BannerComponent />
    </>
  );
};

export default ContactContainer;