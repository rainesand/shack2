import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Nav} from 'react-bootstrap';

function Navbar() {
    return (
    <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/add">Add Shows</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/library">Library</Nav.Link>
        </Nav.Item>
    </Nav>
    );
}

export default Navbar;
