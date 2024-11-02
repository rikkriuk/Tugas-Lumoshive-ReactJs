import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "api-key": "RJS1-202416",
  },
});

const getStudents = async () => {
  try {
    const response = await api.get("/students");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
};

const createStudent = async (studentData) => {
  try {
    const response = await api.post("/students", studentData);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
  }
};

const editStudent = async (studentData, id) => {
  try {
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  } catch (error) {
    console.error("Error editing student:", error);
  }
};

const getDetailStudent = async (id) => {
  try {
    const response = await api.get(`/students/${id}`);
    return response.data.data;
  } catch (error) {
    alert(error.message);
    console.error("Error fetching student:", error);
  }
};

const deleteStudent = async (id) => {
  try {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};

const searchStudents = async (query) => {
  try {
    const response = await api.get(`/students?find=${query}`);
    return response.data.data;
  } catch (error) {
    console.error("Error searching students:", error);
  }
};

export {
  getStudents,
  createStudent,
  editStudent,
  getDetailStudent,
  deleteStudent,
  searchStudents,
};
