import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Login = () => {

    const [formObject, setFormObject] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        // getUsers()
      }, [])
    
      // Handles updating component state when the user types into the input field
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
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

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={handleInputChange}
                                name="password"
                                placeholder="Enter Password (required)"
                                value={formObject.password} />                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Go
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
