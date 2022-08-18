import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

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
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">About</a><br/>

                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">The Company</h5>
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">Team</a><br/>
                            <a href="" className="footer-link">Privacy Policy</a><br/>
                            <a href="" className="footer-link">Contact</a><br/>
                        </Col>
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">The Company</h5>
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">About</a><br/>
                            <a href="" className="footer-link">About</a><br/>

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