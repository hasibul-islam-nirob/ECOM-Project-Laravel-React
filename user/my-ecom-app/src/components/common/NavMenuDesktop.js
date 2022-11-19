import React, {Component, Fragment} from 'react';
import {Col, Container, Navbar, Row, Button} from "react-bootstrap";
import logo from '../../assets/images/475.png';
import {Link} from "react-router-dom";
import {Redirect} from "react-router";


class NavMenuDesktop extends Component {

    constructor() {
        super();
        this.state={
            SearchKey:"",
            SearchRedirectStatus: false,
            afterLoginDiv:"d-none",
            RedirectHome:false,
            cartCount:0
        }

        this.SearchOnChange=this.SearchOnChange.bind(this);
        this.SearchOnClick=this.SearchOnClick.bind(this);
        this.searchRedirect=this.searchRedirect.bind(this);
    }

    SearchOnChange(event){
        let SearchKey=  event.target.value;
        this.setState({SearchKey:SearchKey});
    }

    SearchOnClick(){
        if(this.state.SearchKey.length>=3){
            this.setState({SearchRedirectStatus:true})
        }
    }

    searchRedirect(){
        if(this.state.SearchRedirectStatus===true){
            return <Redirect to={"/ProductListBySearch/"+this.state.SearchKey} />
        }
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <a className="btn" href="#"> <img className="nav-logo" src={logo} alt=""/> </a>
                            <Link to="/cartList" className="cart-btn"><i className="fa fa-shopping-cart"></i>3 items</Link>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input onChange={this.SearchOnChange} type="text" className="form-control" />
                                <Button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/favouritePage" className="btn"> <i className="fa h4 fa-heart"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                            <Link to="/notificationPage" className="btn" > <i className="fa h4 fa-bell"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                            <a className="btn" href="#"> <i className="fa h4 fa-mobile-alt"></i></a>
                            <Link to="/onboard" href="" className="h4 btn">Login</Link>
                        </Col>
                    </Row>
                    {this.searchRedirect()}
                </Container>

            </Fragment>
        );
    }
}

export default NavMenuDesktop;