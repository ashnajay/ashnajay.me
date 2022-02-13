import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Projects from './components/projects'
import Home from './components/home'
import Interests from './components/interests'
import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <Home></Home>
      </div>
    );
  }
}

export default App;
