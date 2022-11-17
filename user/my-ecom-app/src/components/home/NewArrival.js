import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import {Card, Col, Container} from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";
import NewArrivalPlaceholder from "../../placeholder/NewArrivalPlaceholder";

class NewArrival extends Component {

    constructor() {
        super();
        this.state = {
            ProductData:[],
            isLoading:"BetweenTwoSection",
            MainDiv:"d-none"
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this)
    }

    componentDidMount() {
        axios.get(ApiURL.ProductListByRemark("New")).then(res=>{
            this.setState({ProductData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }
    next=()=>{
        this.slider.slickNext();
    }
    previous=()=>{
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay:true,
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


        const MyList = this.state.ProductData;
        const MyView = MyList.map((ProductList,i)=>{
            if(ProductList.special_price==="NA"){
                return <div className="p-1">
                    <Link to={"productDetails/"+ProductList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={ProductList.image} alt=""/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                                <p className="product-price-on-card p-1">Price: { ProductList.price}TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            }
            else{

                return <div className="p-1">
                    <Link to={"productDetails/"+ProductList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={ProductList.image} alt=""/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                                <p className="product-price-on-card">
                                    Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            }

        });

        return (

            <Fragment>
                <NewArrivalPlaceholder isLoading={this.state.isLoading}/>

                <div className={this.state.MainDiv}>
                    <Container className="text-center BetweenTwoSection pt-4 " fluid={true}>
                        <h5 className="section-title px-0 mx-0">NEW ARRIVAL   <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                            <i className="fa fa-angle-left"/>
                        </a>  <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                            <i className="fa fa-angle-right"/>
                        </a>
                        </h5>
                        <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>

                        <Slider ref={ c=>(this.slider=c) } {...settings}>
                            {MyView}
                        </Slider>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default NewArrival;