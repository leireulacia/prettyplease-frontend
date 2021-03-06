import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, useHistory, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getFormattedAmount, getFormattedDuration } from '../requestformatter';
import "./OfferDetailsAccepted.css";


function OfferDetailsAccepted({ offer }) {

    const history = useHistory();
    const { id } = useParams();
    const dispRequest = offer[id - 1];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        setShow(false);
        history.push("/ForSponsorsAccepted");
    }


    return (
        <Container className="OfferDetailsAccepted">
            <Row className="row justify-content-center mt-5 mb-4 text-primary">
                <h3>{dispRequest.charityName}</h3>
            </Row>
            <div className="rounded mx-auto d-block  text-center">
                <img
                    src={dispRequest.charityImageUrl}
                    width="200"
                    height="200"
                    alt={dispRequest.charityName}
                />
            </div>
            <Row className="mt-3 justify-content-md-center">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <strong>What We Do</strong>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>{dispRequest.charityDescription}</Card.Body>
                        </Accordion.Collapse>                
                    </Card>
                </Accordion>
            </Row>            
            <Row className="pt-2 pb-2 justify-content-md-center">
                <Col className="text-center">
                    Amount: {getFormattedAmount(dispRequest.amountAgreed)}
                </Col>
                <Col className="text-center">
                    Duration: {getFormattedDuration(dispRequest.agreedDurationInYears)}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <h4>Sponsorship Accepted!</h4>
            </Row>
            <Row className="justify-content-md-center">
                You will be contacted by {dispRequest.charityName} within the next seven days to finalise details of your sponsorship agreement.
            </Row>
            <Row className="row justify-content-center mt-5 lead">
                {dispRequest.eventDescription}
            </Row>
            <Row className="row justify-content-center">
                {dispRequest.incentive}
            </Row>

            <Router>
                <Row className=" justify-content-center mt-5 ">
                    <Link to="/#">
                        <Button
                            variant="outline-primary"
                            size="lg"
                            onClick={() => history.goBack()}>
                            Back
                        </Button>
                    </Link>
                </Row>
            </Router>
            <div className="row justify-content-center mt-5"></div>
        </Container>
    );
}


export default OfferDetailsAccepted;

