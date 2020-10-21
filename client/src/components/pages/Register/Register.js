import React, { useEffect, useState } from "react";

import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import API from "../../../utils/API";
const Register = () => {
  const [formObject, setFormObject] = useState({
    email: "",
    username: "",
    password: ""
  })

  useEffect(() => {
    getUsers()
  }, [])

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function getUsers() {
    API.getUsers()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  //function to save user in database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email
      && formObject.username
      && formObject.password) {

      API.saveUser({
        email: formObject.email,
        username: formObject.username,
        password: formObject.password
      })
        .then(() => setFormObject({
          email: "",
          username: "",
          password: ""
        }))
        .then(() => getUsers())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="email"
                placeholder="Enter Email (required)"
                value={formObject.email} />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="username"
                placeholder="Enter Username (required)"
                value={formObject.username} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                name="password"
                placeholder="Enter Password (required)"
                value={formObject.password} />
            </Form.Group>

            <Button variant="primary" type="submit"
              onClick={handleFormSubmit} >
              Submit
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
