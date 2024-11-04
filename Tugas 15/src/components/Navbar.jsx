import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="container-fluid bg-color navbar-expand-lg">
         <div className="container d-flex justify-content-between align-items-center py-3 border-color">
            <Link to={"/"} className="text-light fs-4 text-decoration-none">AstroPaper</Link>
               <div>
                  <ul className="d-flex align-items-center justify-content-center m-0">
                     <li className="mx-3 nav-item">
                        <Link className="text-link" to="/posts">Post</Link>
                     </li>
                     <li className="mx-3 nav-item">
                        <Link className="text-link" to="/tags">Tags</Link>
                     </li>
                     <li className="mx-3 nav-item">
                        <Link className="text-link" to="/about">About</Link>
                     </li>
                  </ul>
               </div>
         </div>
      </nav>
   )
}

export default Navbar;