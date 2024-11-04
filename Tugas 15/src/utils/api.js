import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllData = () => {
  return api.get("/posts");
};

const getListData = (page, limit) => {
  return api.get(`/posts?_page=${page}&_per_page=${limit}`);
};

const getDetailData = (slug) => {
  return api.get(`/posts/${slug}`);
};

export { getAllData, getListData, getDetailData };
