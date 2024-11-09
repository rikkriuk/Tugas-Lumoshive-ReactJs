import React, { useEffect, useState } from "react";
import { api } from "../utils/api";

const useStudentData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await api.get("/students");
        setStudents(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, []);

  return students;
};

export default useStudentData;
