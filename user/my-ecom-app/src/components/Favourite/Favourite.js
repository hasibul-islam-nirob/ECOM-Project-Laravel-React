import React, {Component, Fragment} from 'react';
import { Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Favourite extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center py-5 TopSection" fluid={true}>
                    <h5 className="section-title">FAVORITE PRODUCTS</h5>
                    <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6}>

                            <Card className="image-box card">
                                <Link to="/productDetails">
                                    <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                </Link>
                                <Card.Body>
                                    <Link to="/productDetails">
                                        <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                        <p className="product-price-on-card">Price: ৳ 300</p>
                                    </Link>
                                    <Button className="btn site-btn"> <i className="fa fa-trash-alt"></i> Remove</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6}>
                            <Link to="/productDetails">
                                <Card className="image-box card">
                                    <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                    <Card.Body>
                                        <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                        <p className="product-price-on-card">Price: ৳ 300</p>
                                        <Button className="btn site-btn"> <i className="fa fa-trash-alt"></i> Remove</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6}>
                            <Link to="/productDetails">
                                <Card className="image-box card">
                                    <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                    <Card.Body>
                                        <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                        <p className="product-price-on-card">Price: ৳ 300</p>
                                        <Button className="btn site-btn"> <i className="fa fa-trash-alt"></i> Remove</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6}>
                            <Link to="/productDetails">
                                <Card className="image-box card">
                                    <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                    <Card.Body>
                                        <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                        <p className="product-price-on-card">Price: ৳ 300</p>
                                        <Button className="btn site-btn"> <i className="fa fa-trash-alt"></i> Remove</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={4} xs={6}>
                            <Link to="/productDetails">
                                <Card className="image-box card">
                                    <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                    <Card.Body>
                                        <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                        <p className="product-price-on-card">Price: ৳ 300</p>
                                        <Button className="btn site-btn"> <i className="fa fa-trash-alt"></i> Remove</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>



                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;