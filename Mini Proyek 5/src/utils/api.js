import React from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "api-key": "RJS1-202416",
  },
});

export { api };
