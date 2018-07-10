import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
);

export default App;
