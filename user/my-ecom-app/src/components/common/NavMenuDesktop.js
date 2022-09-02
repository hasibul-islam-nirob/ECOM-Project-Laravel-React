import React, {Component, Fragment} from 'react';
import {Col, Container, Navbar, Row, Button} from "react-bootstrap";
import logo from '../../assets/images/475.png';
import {Link} from "react-router-dom";


class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <a className="btn" href="#"> <img className="nav-logo" src={logo} alt=""/> </a>
                            <Button className="cart-btn"><i className="fa fa-shopping-cart"></i>3 items</Button>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input type="text" className="form-control" />
                                <Button type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/favouritePage" className="btn"> <i className="fa h4 fa-heart"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                            <Link to="/notificationPage" className="btn" > <i className="fa h4 fa-bell"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                            <a className="btn" href="#"> <i className="fa h4 fa-mobile-alt"></i></a>
                            <Link to="/onboard" href="" className="h4 btn">Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;