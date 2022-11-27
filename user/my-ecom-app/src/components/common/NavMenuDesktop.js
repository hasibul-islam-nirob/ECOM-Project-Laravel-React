import React, {Component, Fragment} from 'react';
import {Col, Container, Navbar, Row, Button, Dropdown, NavDropdown} from "react-bootstrap";
import logo from '../../assets/images/475.png';
import {Link} from "react-router-dom";
import {Redirect} from "react-router";
import SessionHelper from "../../SessionHelper/SessionHelper";


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

    onLogout=()=>{
        SessionHelper.removeUserMobile();
        this.setState({RedirectHome:true});
    }
    RedirectHome=()=>{
        if(this.state.RedirectHome===true){
            return <Redirect to="/"/>
        }
    }

    render() {

        let UserMobile = SessionHelper.getUserMobile();
        if (UserMobile === null){
            return (
                <Fragment>
                    <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                        <Row>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <a className="btn" href="#"> <img className="nav-logo" src={logo} alt=""/> </a>
                                <Link to="/cartList" className="cart-btn"><i className="fa fa-shopping-cart"></i>3 items</Link>
                            </Col>

                            <Col lg={5} md={5} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input onChange={this.SearchOnChange} type="text" className="form-control" />
                                    <Button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Link to="/favouritePage" className="btn d-none"> <i className="fa h4 fa-heart"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                                <Link to="/notificationPage" className="btn" > <i className="fa h4 fa-bell"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                                <a className="btn" href="#"> <i className="fa h4 fa-mobile-alt"></i></a>
                                <Link to="/onboard" href="" className="h4 btn">Login</Link>
                            </Col>
                        </Row>
                        {this.searchRedirect()}

                    </Container>
                    {this.RedirectHome()}
                </Fragment>
            );



        }else{
            return (
                <Fragment>
                    <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                        <Row>
                            <Col lg={3} md={3} sm={12} xs={12}>
                                <a className="btn" href="#"> <img className="nav-logo" src={logo} alt=""/> </a>
                                <Link to="/cartList" className="cart-btn"><i className="fa fa-shopping-cart"></i>3 items</Link>
                            </Col>

                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input onChange={this.SearchOnChange} type="text" className="form-control" />
                                    <Button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></Button>
                                </div>
                            </Col>

                            <Col lg={3} md={3} sm={12} xs={12}>
                                <Link to="/favouritePage" className="btn"> <i className="fa h4 fa-heart"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                                <Link to="/notificationPage" className="btn" > <i className="fa h4 fa-bell"></i> <sup><span className="badge bg-danger">4</span></sup> </Link>
                                <a className="btn" href="#"> <i className="fa h4 fa-mobile-alt"></i></a>
                                <Link to="/onboard" href="" className="h4 btn d-none">Login</Link>
                            </Col>

                            <Col lg={2} md={2} sm={12} xs={12}>
                                <div className="input-group-">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                            Account
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Cart List</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Favourite</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Notification</Dropdown.Item>
                                            <Dropdown.Item onClick={this.onLogout} >Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>


                        </Row>
                        {this.searchRedirect()}
                    </Container>
                    {this.RedirectHome()}
                </Fragment>
            );
        }


    }
}

export default NavMenuDesktop;