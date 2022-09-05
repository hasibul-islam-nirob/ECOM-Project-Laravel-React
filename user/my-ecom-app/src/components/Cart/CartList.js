import React, {Component, Fragment} from 'react';
import {Breadcrumb, Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class CartList extends Component {

    constructor() {
        super();
        this.state={
            ProductData:[],
            isLoading:"",
            MainDiv:"d-none",
            PageRefreshStatus:false,
            PageRedirectStatus:false,
            confirmBtn:"Confirm Order",
            totalPriceSum:"",
            city:"",
            payment:"",
            name:"",
            address:"",
        }
    }

    render() {
        return (
            <Fragment>

                <Container className=" animated slideInDown TopSection" fluid={true}>
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/cartList">Cart</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="mt-3">
                        <Col md={7} lg={7} sm={12} xs={12}>
                            <Row>

                                <Col md={4} lg={4} sm={6} xs={6} >
                                    <Card className="image-box card">
                                        <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h4 className="product-name-on-card">Outdoor Small Mini Backpack</h4>
                                            <p className="product-price-on-card">Price: ৳ 300</p>
                                            <Row className="text-center">
                                                <Col md={6} lg={6} xs={6} sm={6}>
                                                    <button className="btn w-100 btn-danger site-btn"> <i className="fa fa-trash"></i> </button>
                                                </Col>
                                                <Col md={6} lg={6} xs={6} sm={6}>
                                                    <input className="form-control" value="5" type="number" />
                                                </Col>
                                                <Col md={12} lg={12} xs={12} sm={12} className="mt-2">
                                                    <p className="btn w-100 btn-danger site-btn">Total Price: 54000 tk</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} sm={6} xs={6} >
                                    <Card className="image-box card">
                                        <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h4 className="product-name-on-card">Outdoor Small Mini Backpack</h4>
                                            <p className="product-price-on-card">Price: ৳ 300</p>
                                            <Row className="text-center">
                                                <Col md={6} lg={6} xs={6} sm={6}>
                                                    <button className="btn w-100 btn-danger site-btn"> <i className="fa fa-trash"></i> </button>
                                                </Col>
                                                <Col md={6} lg={6} xs={6} sm={6}>
                                                    <input className="form-control" value="5" type="number" />
                                                </Col>
                                                <Col md={12} lg={12} xs={12} sm={12} className="mt-2">
                                                    <p className="btn w-100 btn-danger site-btn">Total Price: 54000 tk</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} sm={6} xs={6} >
                                    <Card className="image-box card">
                                        <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                        <Card.Body>
                                            <h4 className="product-name-on-card">Outdoor Small Mini Backpack</h4>
                                            <p className="product-price-on-card">Price: ৳ 300</p>
                                            <Row className="text-center">
                                                <Col md={6} lg={6} xs={6} sm={6}>
                                                    <button className="btn w-100 btn-danger site-btn"> <i className="fa fa-trash"></i> </button>
                                                </Col>
                                                <Col md={6} lg={6} xs={6} sm={6}>
                                                    <input className="form-control" value="5" type="number" />
                                                </Col>
                                                <Col md={12} lg={12} xs={12} sm={12} className="mt-2">
                                                    <p className="btn w-100 btn-danger site-btn">Total Price: 54000 tk</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Col>
                        <Col md={5} lg={5} sm={12} xs={12}>
                            <div className="card p-2">
                                <div className="card-body">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                                                <h5 className="Product-Name text-danger">Total Due: 50000 TK</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Choose City</label>
                                                <select   className="form-control">
                                                    <option value="">Choose</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Choose Payment Method</label>
                                                <select  className="form-control">
                                                    <option value="">Choose</option>
                                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Your Name</label>
                                                <input  className="form-control" type="text" placeholder=""/>
                                            </div>

                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Delivery Address</label>
                                                <textarea   rows={2}  className="form-control" type="text" placeholder=""/>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <Button className="btn w-100  site-btn">{this.state.confirmBtn}</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CartList;