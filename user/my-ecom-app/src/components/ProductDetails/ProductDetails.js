import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import ReactDOM from 'react-dom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProducts from "./SuggestedProducts";

class ProductDetails extends Component {

    constructor() {
        super();
        this.state={
            previewImg:"0",
            isSize:null,
            isColor:null,
            color:"",
            size:"",
            quantity:"",
            productCode:null,
            PageRefreshStatus:false,
            PageRedirectStatus:false,
            addToCart:"Add To Cart",
            orderNow:"Order Now",
            addToFav:"Favourite",
            RedirectToLogin:false,
        }
    }

    imgOnClick =(event)=>{
        let imgSrc = event.target.getAttribute('src');
        //let ImagePreview = document.getElementById('ImagePreview');
        this.setState({previewImg:imgSrc})
        //ReactDOM.findDOMNode(ImagePreview).setAttribute('src',imgSrc);
    }

    PriceOption =(special_price, price)=>{
        if (special_price==="NA"){
            return(
                <p className="product-price-on-card">Price: { price}TK</p>
            )
        }else{
            return(
                <p className="product-price-on-card">
                    Price: <strike class="text-secondary">{ price}TK</strike>  { special_price} TK
                </p>
            )
        }
    }



    render() {

        let ProductData = this.props.ProductData;
        let title = ProductData['ProductList'][0]['title'];
        let productBigImg = ProductData['ProductList'][0]['image'];
        if(this.state.previewImg==="0"){
            this.setState({previewImg:productBigImg})
        }
        let price = ProductData['ProductList'][0]['price'];
        let special_price = ProductData['ProductList'][0]['special_price'];
        let category = ProductData['ProductList'][0]['category'];
        let sub_category = ProductData['ProductList'][0]['sub_category'];
        let remark = ProductData['ProductList'][0]['remark'];
        let brand = ProductData['ProductList'][0]['brand'];
        let star = ProductData['ProductList'][0]['star'];
        let product_code = ProductData['ProductList'][0]['product_code'];

        let des = ProductData['ProductDetails'][0]['des'];
        let details = ProductData['ProductDetails'][0]['details'];
        let size = ProductData['ProductDetails'][0]['size'];
        let color = ProductData['ProductDetails'][0]['color'];
        let img1 = ProductData['ProductDetails'][0]['img1'];
        let img2 = ProductData['ProductDetails'][0]['img2'];
        let img3 = ProductData['ProductDetails'][0]['img3'];
        let img4 = ProductData['ProductDetails'][0]['img4'];

        // ========== Working With Color Start ===========//
        var ColorDiv="d-none"
        if(color!=="NA"){
            let ColorArray = color.split(',');
            var ColorOption=ColorArray.map((ColorList,i)=>{
                return <option value={ColorList}>{ColorList}</option>
            })
            ColorDiv=""
        }
        else{
            ColorDiv="d-none"
        }
        // ========== Working With Color End ===========//

        // ========== Working With Size Start ===========//
        var SizeDiv="d-none"
        if(size!=="NA"){
            let SizeArray = size.split(',');
            var  SizeOption=SizeArray.map((SizeList,i)=>{
                return <option value={SizeList}>{SizeList}</option>
            })
            SizeDiv=""
        }
        else{
            SizeDiv="d-none"
        }
        // ========== Working With Size End ===========//

        return (
            <Fragment>
                <Container fluid={true}  className="TopSection  animated slideInDown">
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/productDetails">Details</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="p-2">
                        <Col  className="shadow-sm  bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3 animated " md={6} lg={6} sm={12} xs={12}>

                                    {/*<img className="w-100 d-none" id="ImagePreview" src={productBigImg} height="450px"  alt=""/>*/}

                                    <InnerImageZoom
                                        zoomType={"hover"}
                                        zoomScale={1.9}
                                        src={this.state.previewImg}
                                        zoomSrc={this.state.previewImg}
                                    />

                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-1 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-100 Product-sm-img" src={img1} height="75px" alt=""/>
                                            </Col>
                                            <Col className="p-1 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-100 Product-sm-img" src={img2} height="75px" alt=""/>
                                            </Col>
                                            <Col className="p-1 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-100 Product-sm-img" src={img3} height="75px" alt=""/>
                                            </Col>
                                            <Col className="p-1 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imgOnClick} className="w-100 Product-sm-img" src={img4} height="75px" alt=""/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{title}</h5>
                                    <h6 className="section-sub-title">{des}</h6>
                                    <h5>{this.PriceOption(special_price, price)}</h5>

                                    <div className={ColorDiv}>
                                        <h6 className="mt-2">Choose Color</h6>
                                        <select onChange={this.colorOnChange} className="form-control form-select">
                                            <option value="" disabled selected>Choose Color</option>
                                            {ColorOption}
                                        </select>
                                    </div>

                                    <div className={SizeDiv}>
                                        <h6 className="mt-2">Choose Size</h6>
                                        <select onChange={this.sizeOnChange} className="form-control form-select">
                                            <option value="">Choose Size</option>
                                            {SizeOption}
                                        </select>
                                    </div>

                                    <div className="">
                                        <h6 className="mt-2">Choose Quantity</h6>
                                        <select  className="form-control form-select">
                                            <option value="">Choose Quantity</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                    <div className="input-group mt-3">
                                        <button  className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"/> {this.state.addToCart}</button>
                                        <button  className="btn btn-primary m-1"> <i className="fa fa-car"/>{this.state.orderNow}</button>
                                        <button  className="btn btn-primary m-1"> <i className="fa fa-heart"/> {this.state.addToFav}</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h6 className="mt-2">DETAILS</h6>

                                {ReactHtmlParser(details)}
                            </div>
                        </Col>
                        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                            <div className="shadow-sm p-3 bg-white">
                                <h5 className="mt-2">Reviews</h5>
                                <h6>Hasibul Islam Nirob *****</h6>
                                <p>consectetur adipisicing elit. Consequatur laudantium modi quaerat quo. Consequuntur harum odit provident, quis tempora totam vitae. Animi dignissimos dolores itaque magnam nulla odit similique tempore!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <SuggestedProducts Category={category} SubCategory={sub_category}/>

            </Fragment>
        );
    }
}

export default ProductDetails;