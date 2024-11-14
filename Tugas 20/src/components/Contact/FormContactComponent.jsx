import React, { useState } from "react";
import DOMPurify from "dompurify";
import TitlePageComponent from "../TitlePage/TitlePageComponent";
import "./FormContactStyles.css";

const FormContactComponent = ({ page }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    const sanitizedValue = DOMPurify.sanitize(value);

    setFormData((prevInput) => ({
      ...prevInput,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={`container-fluid ${page === "home" ? "bg-contact-second" : "bg-color-container-contact"}`}>
      <TitlePageComponent title="Get In Touch" description="Hey! Lets Talk" page={page} />

      <div className="container">
        <div className="row">
          <div className="col-md" />
          <form onSubmit={handleSubmit} className="col-md-8 card p-4 mb-5 me-3">
            <div className="my-3">
              <input
                type="text"
                className="form-control bg-input-contact py-2"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-input-contact py-2"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control bg-input-contact py-2"
                id="phone"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bg-input-contact py-2"
                id="message"
                rows="5"
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
            <button type="submit" className="btn-custom-contact">
              Send Now
            </button>
          </form>
          <div className="col-md-3 card p-4 mb-5">
            <div className="d-flex flex-column">
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className="icon-contact border bg-body-tertiary rounded bi bi-telephone-inbound-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact ">Call Anytime</p>
                    <p>
                      + 91 23678 27867 <br /> + 91 67678 92878
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className="icon-contact border bg-body-tertiary rounded bi bi-envelope-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">Send Email</p>
                    <p>
                      connect@itfirms.com <br />
                      hello@itfirms.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div className="p-2 color-primary-contact ">
                    <i className="icon-contact border bg-body-tertiary rounded bi bi-geo-alt-fill  fs-4"></i>
                  </div>
                  <div className="p-2 flex-grow-1">
                    <p className="mb-0 fw-bold color-primary-contact">Visit Us</p>
                    <p>
                      20 Island Park Road, <br />
                      New Jersey, New York,
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="fw-bold text-center mb-3">Follow Us</h5>
              <div className="d-flex flex-row mb-3 justify-content-center text-white">
                <i className="border bg-primary-contact icon-contact rounded bi bi-linkedin fs-4 me-2"></i>
                <i className="border bg-primary-contact icon-contact rounded bi bi-instagram fs-4 me-2"></i>
                <i className="border bg-primary-contact icon-contact rounded bi bi-facebook fs-4 me-2"></i>
                <i className="border bg-primary-contact icon-contact rounded bi bi-twitter fs-4 me-2"></i>
              </div>
            </div>
          </div>
          <div className="col-md" />
        </div>
      </div>
    </section>
  );
};

export default FormContactComponent;
