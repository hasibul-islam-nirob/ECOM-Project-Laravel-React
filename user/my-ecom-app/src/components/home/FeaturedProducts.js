import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import FeaturedProductLoader from "../../placeholder/FeaturedProductLoader";

class FeaturedProducts extends Component {

    constructor() {
        super();
        this.state = {
            ProductData:[],
            isLoading:"TopSection",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiURL.ProductListByRemark("Featured")).then(res=>{
            this.setState({ProductData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }

    render() {

        const MyList = this.state.ProductData;
        const MyView = MyList.map((ProductList,i)=>{
            if(ProductList.special_price==="NA"){
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"productDetails/"+ProductList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={ProductList.image} alt=""/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                                <p className="product-price-on-card p-1">Price: { ProductList.price}TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
            else{

                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
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
                </Col>
            }

        });

        return (
            <Fragment>

                <FeaturedProductLoader isLoading={this.state.isLoading}/>

                <div className={this.state.MainDiv}>
                    <Container className="text-center py-5" fluid={true}>
                        <h5 className="section-title">FEATURED PRODUCTS</h5>
                        <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>
                        <Row>
                            {MyView}
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FeaturedProducts;