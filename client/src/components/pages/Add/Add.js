import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Register from "../Register/Register"
import Navbar from '../../Nav'
import ShowCard from "../../showCard/showCard"
import { Link, useLocation } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import API from "../../../utils/API";
import samples from "./sampleShows";
import './style.css';

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
                {samples.map(show => {
                    return <ShowCard sample={show} key={show.netflixid} />;
                })}
            </Router>
        </div>
    );
}

export default Add;