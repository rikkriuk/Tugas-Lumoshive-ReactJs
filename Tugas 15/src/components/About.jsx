import React from 'react';

const About = () => {
   return (
      <div className="container-fluid bg-color">
         <div className="container">
            <div className="d-flex align-items-end gap-2">
               <h1 className="text-light fs-1 m-0">Mingalaba</h1>
               <i className="bi bi-reception-4 color-orange"></i>
            </div>
            <p className="text-light mt-4">AstroPaper is a minimal, responsive, accessible, and SEO-friendly Astro blog theme. This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, additional color schemes can also be configured.</p>
            <p className="text-light">Read the blog posts or check <span className="dashed-line">README</span> for more info.</p>

            <div className="d-flex align-items-center gap-3">
               <p className="text-light m-0">Social Links: </p>
               <div className="d-flex gap-3">
                  <i className="bi bi-github text-light fs-5"></i>
                  <i className="bi bi-facebook text-light fs-5"></i>
                  <i className="bi bi-instagram text-light fs-5"></i>
                  <i className="bi bi-linkedin text-light fs-5"></i>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;