import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center py-5" fluid={true}>
                    <h5 className="section-title">CATEGORIES</h5>
                    <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>

                        <Col key={1} xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className="card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className="card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className="card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className=" card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col key={1} xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Row>
                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className=" card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className=" card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className="card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <Card className=" card">
                                        <img className="w-100" src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h6 className="category-name">Category Name</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Categories;