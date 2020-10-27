import React, { useEffect, useState } from "react";
import ShowCard from "../showCard/showCard.js"
import samples from "./sampleShows"
import './styles.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';

function Results(props) {


    return (
        <Container>
            <div id="results">
                {samples.map(show => {
                    return <ShowCard sample={show} key={show.netflixid} />;
                })}
            </div>
        </Container>
    )
}

export default Results;