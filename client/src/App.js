import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register"
import Login from "./components/pages/login/login"
import Add from "./components/pages/Add/Add"
import Library from "./components/pages/Library/library"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Nav'


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/login" component={Library} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
