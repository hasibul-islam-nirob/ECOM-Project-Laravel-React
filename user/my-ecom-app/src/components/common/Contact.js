import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <Fragment>

                <Container>
                    <Row>
                        <Breadcrumb className="shadow-sm TopSection w-100 bg-white py-3">
                            <Breadcrumb.Item> <Link to="/">Home</Link> </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/contact">Contact</Link> </Breadcrumb.Item>
                        </Breadcrumb>
                        <Col className="shadow-sm mt-1 animated slideInDown bg-white " md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form id="contactForm"  className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input className="form-control m-2" type="email" placeholder="Email Address"/>
                                        <textarea className="form-control m-2" type="text" placeholder="Message"></textarea>
                                        <button id="sendBtn" type="submit" className="btn btn-danger m-2 site-btn contactFormBtn">Send</button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9009669046704!2d90.38828391450218!3d23.750910694674705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1601135282389!5m2!1sen!2sbd" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;