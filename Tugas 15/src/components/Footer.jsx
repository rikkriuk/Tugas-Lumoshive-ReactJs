const Footer = () => {
   return (
      <footer className="container-fluid bg-color">
         <div className="container d-flex justify-content-between align-items-center py-3 border-top-cstm">
            <p className="text-light m-0">Copyright @ 2024 | All rights reserves</p>
            <div className="d-flex align-items-center justify-content-center gap-3">
               <i className="bi bi-github text-light fs-4"></i>
               <i className="bi bi-facebook text-light fs-4"></i>
               <i className="bi bi-instagram text-light fs-4"></i>
               <i className="bi bi-linkedin text-light fs-4"></i>
            </div>
         </div>
      </footer>
   )
}

export default Footer;