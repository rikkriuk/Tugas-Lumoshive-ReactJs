import React from 'react'
import { Link } from 'react-router-dom'

const PostList = (props) => {
   const { post } = props;
   const { id, title, desc } = post;
   return (
      <div>
         <Link to={`/posts/${id}`} className="fs-4 color-orange text-decoration-none">{title}</Link>
         <div className="my-1">
            <i className="bi bi-calendar3 text-secondary me-2"></i>
            <span className="text-secondary">Updated: Oct 14, 2024 | 09:23 AM</span>
         </div>
         <p className="text-light py-1">{desc}</p>
      </div>
   )
}

export default PostList;