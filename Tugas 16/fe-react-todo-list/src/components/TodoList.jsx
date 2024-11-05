import React, { useContext } from "react";
import { LanguageContext } from "../App";

function TodoList({ todos, handleDelete, handleComplete }) {
  const { language } = useContext(LanguageContext);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={() => handleDelete(todo.id)}
            >
              {language === "en" ? "Delete" : "Hapus"}
            </button>

            <button
              className="btn btn-primary btn-sm"
              onClick={(e) => handleComplete(todo.id)}
            >
              {language === "en" ? "Complete" : "Selesai"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
