import React from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Login = () => {
    return (
        <Container >
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

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
