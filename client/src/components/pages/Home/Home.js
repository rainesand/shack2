import React from "react";
import { Input } from 'react-rainbow-components';
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { Form, Button } from 'react-bootstrap';


const inputStyles = {
  width: 300,
};

const Home = () => {
  return (
    <div className="container">

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Button variant="brand" className="rainbow-m-around_medium">
        Login
        </Button>

      <Link to="/register" className="notHere" >
        <Button variant="brand" className="rainbow-m-around_medium">
          Register
        </Button>
      </Link>

    </div>
  );
};

export default Home;
