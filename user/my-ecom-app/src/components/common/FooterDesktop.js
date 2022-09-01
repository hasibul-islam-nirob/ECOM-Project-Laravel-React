import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class FooterDesktop extends Component {
    render() {
        return (
            <div className="card">
                <Container fluid={true}>
                    <Row className="px-0 my-5">
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">Lorem ipsum dolor sit amet,</h5>
                            <p> consectetur adipisicing elit. Consequatur laudantium modi quaerat quo. Consequuntur harum odit provident, quis tempora totam vitae. Animi dignissimos dolores itaque magnam nulla odit similique tempore!</p>

                            <h5 className="footer-menu-title">Social Link</h5>
                            <a href=""> <i className="m-1 h4 fab fa-facebook"></i> </a>
                            <a href=""> <i className="m-1 h4 fab fa-instagram"></i> </a>
                            <a href=""> <i className="m-1 h4 fab fa-twitter"></i> </a>
                        </Col>
                        
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">The Company</h5>
                            <a href="" className="footer-link">About Us</a><br/>
                            <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                            <a href="" className="footer-link">Our Team</a><br/>
                            <br/>
                            <h5 className="footer-menu-title">Office Address</h5>
                            <a href="" className="footer-link">Farmgate, Tejgaon, Dhaka 1215</a><br/>
                            <a href="" className="footer-link">contact.nirob@gmail.com</a><br/>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">More Info</h5>
                            <a href="" className="footer-link">How To Purchase</a><br/>
                            <a href="" className="footer-link">Privacy Policy</a><br/>
                            <a href="" className="footer-link">Refund Policy</a><br/>
                            <a href="" className="footer-link">Payment Policy</a><br/>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">Download Apps</h5>
                            <a href="" className="footer-link">Android</a><br/>
                            <a href="" className="footer-link">ISO</a><br/>

                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                    <Container>
                        <Row className="px-0 text-white">
                            <p>&copy; 2022</p>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default FooterDesktop;