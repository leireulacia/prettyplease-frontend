import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirmationRequest(props) {
    // Variable to control the modal
    // const [modalShow, setModalShow] = React.useState(false);
    // const textDuration = () =>{(props.charitydetails.isSingleEvent ? 'One-Off' : 'years' );
    // const textDuration = () =>console.log(props.charitydetails.isSingleEvent);
    const handlerSubmit = () => console.log(props.charitydetails);



    return (

                        <Modal
                            // show={modalShow}
                            //     onHide={() => setModalShow(false)}
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            >
                            <Modal.Header closeButton>
                                <Modal.Title  className="justify-content-md-center mt-4" id="contained-modal-title-vcenter ">
                                Confirmation request
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>Press SUBMIT to continue or CLOSE to edit the request:</h6>
                            
                                <Row>
                                    <Col xs={6} md={2}>
                                        Amount:
                                    </Col>
                                    <Col xs={6} md={10}>
                                       £ {props.charitydetails.amount}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2}>
                                        Description:
                                    </Col>
                                    <Col xs={6} md={10}>
                                        {props.charitydetails.description}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2}>
                                         Duration:
                                    </Col>
                                    <Col xs={6} md={10}>
                                        {(props.charitydetails.isSingleEvent ? 'One-Off' : props.charitydetails.duration +'years' )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={2}>
                                      Incentive:
                                    </Col>
                                    <Col xs={6} md={10}>
                                      {props.charitydetails.incentive}
                                    </Col>
                                </Row>
                             

                            </Modal.Body>
                            <Modal.Footer>
                                    <Button onClick={handlerSubmit}>Submit</Button> 
                                 <Button onClick={props.onHide}>Close</Button> 
                            </Modal.Footer>
                            </Modal> 

    );
}

export default ModalConfirmationRequest;