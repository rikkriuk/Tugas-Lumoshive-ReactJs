import React, { useState } from "react"
import LogoImage from "../../assets/logo.png";
import "./FooterStyles.css";
import PythonLogo from "../../assets/python-logo.png";
import ReactLogo from "../../assets/react-logo.png";
import WordpressLogo from "../../assets/wordpress-logo.png";
import DOMPurify from "dompurify";

const FooterComponent = () => {
   const [email, setEmail] = useState("");
  
    const handleChange = (e) => {      
      const sanitizedValue = DOMPurify.sanitize(e.target.value);
      setEmail(sanitizedValue);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    };

   return (
      <footer className="container-fluid bg-color d-flex align-items-center justify-content-center">
         <div className="container row text-white py-5 gap-5 gap-md-0 gap-lg-0">
            <section className="col-12 md-6 col-md-6 col-lg-3">
               <div className="d-flex align-items-center gap-3">
                  <img src={LogoImage} alt="logo-image" height={35} loading="lazy" />
                  <h1 className="fs-3 fw-bold m-0">Logoipsum</h1>
               </div>

               <div className="mt-4">
                  <p>It is a long established 
                  fact that a reader will be distracted by the readable content of a page when looking at</p>
               </div>

               <div className="d-flex gap-3 mt-4">
                  <a href="https://www.linkedin.com/in/riki-ridwan-9779ba306" target="_blank" rel="noopener noreferrer" className="btn-social-media"><i className="bi bi-linkedin"></i></a>
                  <a href="https://www.instagram.com/amiyourkey/" target="_blank" rel="noopener noreferrer" className="btn-social-media"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/riki-ridwan-9779ba306" target="_blank" rel="noopener noreferrer" className="btn-social-media"><i className="bi bi-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/riki-ridwan-9779ba306" target="_blank" rel="noopener noreferrer" className="btn-social-media"><i className="bi bi-twitter"></i></a>
               </div>
            </section>

            <section className="col-12 md-6 col-md-6 col-lg-3">
               <div className="line-custom">
                  <h2 className="fs-3 fw-bold m-0">Services</h2>
               </div>

               <div className="mt-4">
                  <ul className="list-unstyled d-flex flex-column gap-3">
                     <li>
                        <a className="text-decoration-none text-white footer-text" href="">Web Design/Development</a>
                     </li>
                     <li>
                        <a className="text-decoration-none text-white footer-text" href="">App Development</a>
                     </li>
                     <li>
                        <a className="text-decoration-none text-white footer-text" href="">UI/UX Design</a>
                     </li>
                     <li>
                        <a className="text-decoration-none text-white footer-text" href="">HubSpot Integration</a>
                     </li>
                     <li>
                        <a className="text-decoration-none text-white footer-text" href="">Email Marketing</a>
                     </li>
                     <li>
                        <a className="text-decoration-none text-white footer-text" href="">Website Migration</a>
                     </li>
                  </ul>
               </div>
            </section>

            <section className="col-12 md-6 col-md-6 col-lg-3">
               <div className="line-custom">
                  <h2 className="fs-3 fw-bold m-0">Career</h2>
               </div>

               <div className="mt-4 d-flex flex-column gap-3">
                  <div className="d-flex gap-3">
                     <img className="img-logo" src={ReactLogo} alt="image-logo" loading="lazy" />
                     <div>
                        <h3 className="fs-4 text-main-color">ReactJs Dev.</h3>
                        <p>1-5 Years of Exp.</p>
                     </div>
                  </div>

                  <div className="d-flex gap-3">
                     <img className="img-logo" src={WordpressLogo} alt="img-logo" loading="lazy" />
                     <div>
                        <h3 className="fs-4 text-main-color">Wordpress Dev.</h3>
                        <p>1-5 Years of Exp.</p>
                     </div>
                  </div>

                  <div className="d-flex gap-3">
                     <img className="img-logo" src={PythonLogo} alt="img-logo" loading="lazy" />
                     <div>
                        <h3 className="fs-4 text-main-color">Python Developer</h3>
                        <p>1-5 Years of Exp.</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="col-12 md-6 col-md-6 col-lg-3">
               <div className="line-custom">
                  <h3>Subscribe Us</h3>
               </div>

               <div className="mt-4">
                  <p>It is a long established 
                  fact that a reader will be distracted by the readable </p>
               </div>

               <form onSubmit={handleSubmit} className="d-flex flex flex-column align-items-end gap-3">
                  <input className="w-100 input-custom" type="text" placeholder="Email" value={email} onChange={handleChange} />
                  <button type="submit" className="btn-submit-custom">Submit</button>
               </form>
            </section>
         </div>
      </footer>
   )
}

export default FooterComponent;