import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Interests from './components/interests';

ReactDOM.render(
  <Router>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/interests" element={<Interests/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  </Router>,

  document.getElementById("root")
);