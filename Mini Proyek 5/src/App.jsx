import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListContainer from "./containers/ListContainer";
import Layout from "./containers/Layout";
import FormContainer from "./containers/FormContainer";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ListContainer />} />
            <Route path="/add" element={<FormContainer />} />
            <Route path="/edit/:id" element={<FormContainer />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App;