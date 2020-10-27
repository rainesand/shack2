import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register"
import Navbar from '../../Nav'
import ShowCard from "../../showCard/showCard"
import { Link, useLocation } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import API from "../../../utils/API";
import samples from "../../NewShows/sampleShows";
import './style.css';
import NewShows from "../../NewShows/newShows"
import Results from "../../Results/results";
import Search from "../../Search/search";
import { Container, Row, Col } from 'react-bootstrap';

function Add() {

    const [showState, setShowState] = useState([]);

    useEffect(() => {
        console.log(samples);
      }, [])

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                </Switch>
                <Container className="center">
                    <Row className="justify-content-md-center">
                        <Col md={12} id="welcome">
                            <h1 id="welcomeName">Add to your Collection</h1>
                        </Col>
                    </Row>
                </Container>
                <Search />
            </Router>
        </div>
    );
}

export default Add;