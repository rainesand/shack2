import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


const inputStyles = {
  width: 300,
};

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to ShowTrack</h1>

      <Link to="/login" className="notHere" >
      <Button variant="primary" type="submit">
        Login
      </Button>
      </Link>

      <Link to="/register" className="notHere" >
      <Button variant="primary" type="submit">
        Register
      </Button>
      </Link>
    </div>
  );
};

export default Home;
