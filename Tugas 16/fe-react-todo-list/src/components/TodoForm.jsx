import React, { useContext, useState } from "react";
import { LanguageContext } from "../App";

function TodoForm(props) {
  const { handleChange, handleSubmit, input } = props;
  const { language } = useContext(LanguageContext);

  return (
    <form className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder={language === "en" ? "Add Todo" : "Tambah Todo"}
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        {language === "en" ? "Add" : "Tambah"}
      </button>
    </form>
  );
}

export default TodoForm;
