import React, { useEffect, useState } from "react";
import ShowCard from "../showCard/showCard.js"
import samples from "../NewShows/sampleShows"
import './styles.css';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';

function Results(props) {
    var shows = props.shows;

    return (
        <Container>
            <div id="results">
                {shows.map(show => {
                    return <ShowCard sample={show} key={show.netflixid} />;
                })}
            </div>
        </Container>
    )
}

export default Results;