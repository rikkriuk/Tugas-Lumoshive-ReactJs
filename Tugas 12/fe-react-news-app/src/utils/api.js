import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const fetchGame = async () => {
  const response = await axios.get(`${API_URL}/games`);
  return response.data;
};

export const fetchGameDetail = async (key) => {
  const response = await axios.get(`${API_URL}/detail/${key}`);
  return response.data;
};
