import React, { createContext, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

export const LanguageContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);
  const [language, setLanguage] = useState("en");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {
      id: Date.now(),
      text: input,
      completed: false,
    }])

    setInput("");
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const handleChangeLanguage = (language) => {
    setLanguage(language);
  }

  return (
    <LanguageContext.Provider value={{language, setLanguage: handleChangeLanguage}}>
      <Navbar/>
      <div className="container mt-5">
        <h1 className="text-center mb-4">{language === "en" ? "Todo List" : "Daftar Todo"}</h1>
        <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
