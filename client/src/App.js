import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register"

function App() {
  return (
    <div>
      <Router>
        <Home />
        <Route exact path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
