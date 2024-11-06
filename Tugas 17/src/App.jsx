import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/posts" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogDetail />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
