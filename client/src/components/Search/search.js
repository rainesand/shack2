import React, { useEffect, useState } from "react";
import './styles.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import API from "../../utils/API";
import NewShows from "../NewShows/newShows"
import Results from "../Results/results";

function Search() {
    // Set search field state
    const [searchState, setSearchState] = useState({
        search: ""
    });

    // Set results state
    const [resultsState, setResultsState] = useState([]);

    //Update search state
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearchState({ ...searchState, [name]: value })
    };

    const handleFormSubmit = event => {
        var settingsSearch = {
            "async": true,
            "crossDomain": true,
            "url": `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=${searchState.search}-!1900%2C2020-!0%2C5-!0%2C10-!0-!Any-!Any-!Any-!gt100-!%7Bdownloadable%7D&t=ns&cl=all&st=adv&ob=Relevance&p=1&sa=and`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
                "x-rapidapi-key": "a2bf636d02msh0285b0bad0d167cp1bad37jsn53ce1d57c625"
            }
        }

        // When the form is submitted, prevent its default behavior
        event.preventDefault();
        API.searchNetflix(settingsSearch)
            .then(res => {
                console.log(res)
                setResultsState(res.ITEMS);
            }
            )
            .catch(err => console.log(err));
    };


    return (
        <Container >
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form.Group id="showSearch">
                        <Form.Label>Search for a show or movie to add</Form.Label>
                        <Form.Control
                            id="searchBar"
                            placeholder="Enter Search"
                            onChange={handleInputChange}
                            name="search"
                            value={searchState.search} />
                    </Form.Group>
                    <Button type="submit" onClick={handleFormSubmit}>Search</Button>
                </Col>
            </Row>
            <NewShows />
            <Results shows={resultsState}/>
        </Container>
    )

}

export default Search;