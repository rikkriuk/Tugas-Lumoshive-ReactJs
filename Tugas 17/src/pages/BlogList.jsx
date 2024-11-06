import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const baseUrl = "http://localhost:3000/";

const BlogList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the current page from the query parameter or default to 1
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("_page")) || 1;
  const limit = parseInt(queryParams.get("_per_page")) || 4;

  // Get the posts from the JSON server
  const url = `${baseUrl}posts?_page=${initialPage}&_per_page=${limit}`;
  const { loading, data } = useFetch(url);

  const handlePageChange = (newPage) => {
    navigate(`/posts/?_page=${newPage}&_per_page=${limit}`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Blog Posts</h1>
      { loading ? (
        <p>Loading...</p>
      ) : (
        <section className="row">
          {data?.data.data.map((post) => (
            <div className="col-md-6 col-lg-4 mb-4" key={post.id}>
              <Link to={`/post/${post.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src={post.img}
                    className="card-img-top img-cstm"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted">{post.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </section> 
      )}
      <div className="d-flex justify-content-center mt-4">
        <button
        onClick={() => handlePageChange(initialPage - 1)}
          className="btn btn-outline-primary me-2"
          disabled={initialPage === 1}
        >
          <i className="bi bi-arrow-left"></i> Previous
        </button>
        <button
        onClick={() => handlePageChange(initialPage + 1)}
          className="btn btn-outline-primary"
          disabled={data?.data?.pages === initialPage}
        >
          Next <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
