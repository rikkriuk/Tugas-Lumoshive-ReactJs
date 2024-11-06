import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useNavigate, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const baseUrl = "http://localhost:3000/";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `${baseUrl}posts/${id}`;
  const { loading, data } = useFetch(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <div className="container my-5">
      <button 
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div className="card shadow-sm p-4">
        <img src={data?.data.img} alt="Blog image" className="card-img-top" />
        <h1 className="card-title text-center">{data?.data.title}</h1>
        <p className="card-text text-muted text-center">{data?.data.desc}</p>
        <hr />
        <div className="card-body">{parse(data.data.content)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
