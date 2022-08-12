import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center card py-5" fluid={true}>
                    <h5 className="section-title">SPECIAL COLLECTION</h5>
                    <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>

                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;