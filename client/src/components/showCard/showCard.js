import { Collapse, Card, Modal, Row, Col, Button, Form } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

function ShowCard(props) {
    //State for summary collapse div
    const [open, setOpen] = useState(false);

    //State for Add modal
    const [show, setShow] = useState(false);

    //State for Add modal options
    const [statusState, setStatusState] = useState({
        watchStatus: "",
        userRating: 0
    });

    // Handles updating component state when the user changes the modal fields
    function handleInputChange(event) {
        const { name, value } = event.target;
        setStatusState({ ...statusState, [name]: value })
    };

    // function to open/close modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const thisShow = props.sample;
    return (
        <>
            <Button variant="dark" className="cardBtn">
            <Card style={{ width: '18rem' }}
                onClick={() => setOpen(!open)}
                aria-controls="summary"
                aria-expanded={open}>
                <Card.Img variant="top" src={thisShow.largeimage} alt="showtitle image"></Card.Img>
                <Card.Body >
                    <h3><span className="badge badge-warning" id="ratingBadge">Score: {thisShow.rating}</span></h3>
                    <h5 className="card-title">{thisShow.title}</h5>
                    <hr></hr>
                    <Collapse in={open}>
                        <div id="summary">
                            {thisShow.synopsis}
                            <br></br>
                            <Button onClick={handleShow}>Add</Button>
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
            </Button>

            {/* Modal for this card */}
            <Modal show={show} onHide={handleClose}>

                {/* Modal header */}
                <Modal.Header closeButton>
                    <Modal.Title>{thisShow.title}</Modal.Title>
                </Modal.Header>

                {/* Modal Body */}
                <Modal.Body>
                    <Row className="modalRow">
                        <Col>
                            <Card.Img variant="top" src={thisShow.largeimage} alt={thisShow.title} ></Card.Img>
                        </Col>
                        <Col>
                            <Form.Group >
                                <Form.Label>Watch Status</Form.Label>
                                <Form.Control
                                    onChange={handleInputChange}
                                    name="watchStatus"
                                    value={statusState.watchStatus}
                                    as="select" custom>
                                    <option>Completed</option>
                                    <option>Watching</option>
                                    <option>Plan to Watch</option>
                                </Form.Control>
                                <hr></hr>
                                <Form.Label>Your Rating</Form.Label>
                                <Form.Control
                                    onChange={handleInputChange}
                                    name="userRating"
                                    value={statusState.userRating}
                                    as="select" custom>

                                    <option>10</option>
                                    <option>9</option>
                                    <option>8</option>
                                    <option>7</option>
                                    <option>6</option>
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                </Modal.Body>

                {/* Modal Footer */}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Discuss
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ShowCard;
