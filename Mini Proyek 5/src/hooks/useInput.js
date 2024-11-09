import React, { useState } from "react";

const useInput = (input) => {
  const [form, setForm] = useState(input);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, setForm, handleChange];
};

export default useInput;
