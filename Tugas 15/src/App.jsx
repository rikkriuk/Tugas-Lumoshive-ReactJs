import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './pages/Post';
import Home from './pages/Home';
import About from './pages/About';
import DetailPost from './pages/DetailPost';
import Tags from './pages/Tags';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<DetailPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}