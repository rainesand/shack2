import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import API from "../../../utils/API";

function Library () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
    }, [])

    function getPosts() {
        API.getPost()
            .then(res => {
                console.log("getting posts");
                setPosts(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <Container>
            {posts.length}
        </Container> 
    )
};


export default Library;