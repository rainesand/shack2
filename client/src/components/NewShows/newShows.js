import React, { useEffect, useState } from "react";
import ShowCard from "../showCard/showCard.js"
import samples from "./sampleShows"
import './styles.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';

function NewShows() {


    return (
        <Container id="newDisplay">
            <Row className="justify-content-md-center">
                <h1 id="displayTitle">Newest Additions In US</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <CardDeck>
                        <div className="sidescroll">
                            {samples.map(show => {
                                return <ShowCard sample={show} key={show.netflixid} />;
                            })}
                        </div>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )
}

export default NewShows;