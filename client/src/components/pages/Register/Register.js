import React, {useEffect, useState} from "react";

import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import API from "../../../utils/API";
const Register = () => {

    useEffect(() => {
      getUsers()
    }, [])


    function getUsers(){
      API.getUsers()
      .then((res) => {
        console.log(res) 
      })
      .catch((err) => {
        console.log(err) 
      })

    }

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
