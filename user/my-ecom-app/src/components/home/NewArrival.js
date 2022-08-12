import React, {Component} from 'react';
import Slider from "react-slick";
import {Card, Col, Container, Row} from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

    constructor() {
        super();
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this)
    }

    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoPlay:true,
            autoplaySpeed:3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (

            <Container className="text-center BetweenTwoSection pt-4 " fluid={true}>
                <h5 className="section-title px-0 mx-0">NEW ARRIVAL   <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                        <i className="fa fa-angle-left"/>
                    </a>  <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fa fa-angle-right"/>
                    </a>
                </h5>
                <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>

                    <Slider ref={ c=>(this.slider=c) } {...settings}>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className="image-box card">
                                <img src="https://static-01.daraz.com.bd/p/44fac340a6fdceb7925d22b006a3aa22.jpg" alt=""/>
                                <Card.Body>
                                    <h6 className="product-name-on-card">Outdoor Small Mini Backpack</h6>
                                    <p className="product-price-on-card">Price: ৳ 300</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>

            </Container>
        );
    }
}

export default NewArrival;