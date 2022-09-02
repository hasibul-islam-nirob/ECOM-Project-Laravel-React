import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row, Modal, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class Notification extends Component {

    constructor() {
        super();
        this.state={
            NotificationData:[],
            isLoading:"",
            MainDiv:"d-none",
            NotificationModal:false,
            NotificationDate:"",
            NotificationTitle:"",
            NotificationMsg:"",
        }
        this.handleClose=this.handleClose.bind(this);
        this.handleShow=this.handleShow.bind(this);
    }

    handleClose(){
        this.setState({NotificationModal:false})
    }
    handleShow(){
        this.setState({NotificationModal:true});
    }

    render() {
        return (
            <Fragment>

                <Container className="TopSection">
                    <Row>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card" onClick={this.handleShow}>
                                <Card.Body>
                                    <h6>this is title</h6>
                                    <p className="py-1 px-0 m-0 text-primary">Date:03-09-2022, Status:Read</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card" onClick={this.handleShow}>
                                <Card.Body>
                                    <h6>this is title</h6>
                                    <p className="py-1 px-0 m-0 text-primary">Date:03-09-2022, Status:Read</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card" onClick={this.handleShow}>
                                <Card.Body>
                                    <h6>this is title</h6>
                                    <p className="py-1 px-0 m-0 text-primary">Date:03-09-2022, Status:Unread</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <Card className="notification-card" onClick={this.handleShow}>
                                <Card.Body>
                                    <h6>this is title</h6>
                                    <p className="py-1 px-0 m-0 text-success">Date:03-09-2022, Status:Read</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.NotificationModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6> <i className="fa theme-text fa-bell"/> Date: 01-09-2022</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6 className="notification-title">This IS Title</h6>
                        <p>consectetur adipisicing elit. Consequatur laudantium modi quaerat quo.</p>
                        <p>consectetur adipisicing elit. Consequatur laudantium modi quaerat quo.</p>
                        <p>consectetur adipisicing elit. Consequatur laudantium modi quaerat quo.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn site-btn" onClick={this.handleClose}>Close</button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;