import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class SuggestedProducts extends Component {

    constructor() {
        super();
        this.state={
            ProductData:[]
        }
    }

    componentDidMount() {
        const SubCategory=this.props.SubCategory;
        axios.get(ApiURL.SimilarProduct(SubCategory)).then(res=>{
            this.setState({ProductData:res.data});
        }).catch(err=>{

        })
    }

    render() {

        let MyList = this.state.ProductData;

        if (MyList.length > 0){
            const Category=this.props.Category;
            const SubCategory=this.props.SubCategory;
            const MyView = MyList.map((ProductList,i)=>{
                if(ProductList.special_price==="NA"){
                    return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                        <Link to={"/productDetails/"+ProductList.product_code}>
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
                        <Link to={"/productDetails/"+ProductList.product_code}>
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
                    <Container className="text-center py-5" fluid={true}>
                        <h5 className="section-title">You My Like</h5>
                        <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>
                        <Row>
                            {MyView}
                        </Row>
                    </Container>
                </Fragment>
            );

        }else{

            return (
                <Fragment>

                </Fragment>
            );


        }


    }
}

export default SuggestedProducts;