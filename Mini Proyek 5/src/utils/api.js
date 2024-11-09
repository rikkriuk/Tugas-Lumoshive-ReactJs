import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "api-key": "RJS1-202416",
  },
});

const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getDataById = async (endpoint) => {
  try {
    console.log(endpoint);
    const response = await api.post(endpoint);
    return response.data;
  } catch (error) {
    console.log("error");
  }
};

const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getData, getDataById, postData, putData, api };
