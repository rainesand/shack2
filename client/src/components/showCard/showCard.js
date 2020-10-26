import { Collapse, Card, Modal, Row, Col, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import img from "./cardpic.png"

function ShowCard(props) {
    //State for summary collapse div
    const [open, setOpen] = useState(false);

    //State for Add modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const thisShow = props.sample;
    var dataTarget = "#" + show.netflixid + "Summary";
    return (
        <>
            <Button onClick={() => setOpen(!open)}
                aria-controls="summary"
                aria-expanded={open}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={thisShow.largeimage} alt="showtitle image"></Card.Img>
                    <Card.Body >
                        <h3><span className="badge badge-warning" id="ratingBadge">Score: {thisShow.rating}</span></h3>
                        <h5 className="card-title">{thisShow.title}</h5>
                        <hr></hr>
                        <Collapse in={open}>
                            <div id="summary">
                                {thisShow.synopsis}
                                <Button onClick={handleShow}>Add</Button>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            </ Button >

            {/* Modal for this card */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{thisShow.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{thisShow.synopsis}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ShowCard;
