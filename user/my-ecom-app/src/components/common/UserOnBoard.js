import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Form, Row} from "react-bootstrap";

class UserOnBoard extends Component {
    constructor() {
        super();
        this.state={
            btn:"Next",
            MobileNo:"",
            UserRedirect:false
        }
        
    }

    render() {
        return (
            <Fragment>
                <Container className="py-5 TopSection">
                    <Row className="d-flex justify-content-center pt-5">
                        <Col md={4} lg={4} sm={8} xs={12}>
                            <Card style={{ width: '18rem' }} >
                                <Card.Body >
                                    <Card.Title className="py-3 text-center">User Login</Card.Title>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label><b>Please Enter Your Phone Number</b></Form.Label>
                                                <Form.Control type="text" placeholder=" " />
                                            </Form.Group>
                                        </Form>
                                    </Card.Text>
                                    <div className="d-grid gap-2 pt-2 pb-5">
                                        <button className="btn btn-info" type="button"> Next </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default UserOnBoard;