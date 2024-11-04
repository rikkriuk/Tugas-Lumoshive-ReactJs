import React from "react";
import { Link } from "react-router-dom";

const DetailPost = (props) => {
   const { post, navigate, prev, next, fetchData } = props;
   const { title, desc, content } = post;
   
   return (
      <div className="container">
         <div className="mb-3">
            <button onClick={() => navigate(-1)} className="btn btn-outline-light">
            <i className="bi bi-arrow-left me-3"></i>
            Go back
            </button>
         </div>
         <div>
            <h1 className="fs-4 color-orange text-decoration-none">{title}</h1>
            <div className="my-1">
               <i className="bi bi-calendar3 text-secondary me-2"></i>
               <span className="text-secondary">Updated: Oct 14, 2024 | 09:23 AM</span>
            </div>
            <p className="text-light py-1">{desc}</p>
         </div>

         <div className="py-3 text-light" dangerouslySetInnerHTML={{__html: content}}></div>

         <div className="container d-flex justify-content-between align-items-center py-4 dashed-line">
            <div>
               <p className="text-light my-1">Share this post on:</p>
               <div className="text-light d-flex gap-3">
                  <i className="bi bi-whatsapp fs-5"></i>
                  <i className="bi bi-facebook fs-5"></i>
                  <i className="bi bi-twitter fs-5"></i>
                  <i className="bi bi-send-fill fs-5"></i>
                  <i className="bi bi-pinterest fs-5"></i>
                  <i className="bi bi-envelope-fill fs-5"></i>
               </div>
            </div>
            <div className="text-light m-0">
               <Link className="btn btn-outline-light">
                  <i className="bi bi-arrow-up me-2"></i>
                  Back to top
               </Link>
            </div>
         </div>

         <div className="d-flex container justify-content-between align-items-start py-5 gap-4">
               <div>
                  <Link
                     onClick={() => prev && fetchData(prev.id)}
                     to={`/posts/${prev?.id}`}
                     className={`btn btn-outline-light ${!prev ? 'disabled-link' : ''}`}
                  >
                     Prev Post
                     <i className="bi bi-arrow-left ms-3"></i>
                  </Link>
                  <p className="color-orange mt-2">
                     {prev?.title}
                  </p>
               </div>
               <div className="d-flex flex-column align-items-end">
                  <Link
                     onClick={() => next && fetchData(next.id)}
                     to={`/posts/${next?.id}`}
                     className={`btn btn-outline-light ${!next ? 'disabled-link' : ''}`}
                  >
                     Next Post
                     <i className="bi bi-arrow-right ms-3"></i>
                  </Link>

                  <p className="color-orange text-end mt-2">
                     {next?.title}
                  </p>
               </div>
         </div>
      </div>
   )
}

export default DetailPost;