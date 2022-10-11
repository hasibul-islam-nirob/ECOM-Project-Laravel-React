import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/images/475.png";
import MegaMenuMobile from "../home/MegaMenuMobile";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class NavMenuMobile extends Component {

    constructor() {
        super();
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose",
            MenuData:[],
            RedirectHome:false,
            cartCount:0,

        }
    }

    componentDidMount() {
        axios.get(ApiURL.sendCategoryDetails).then(res=>{
            this.setState({MenuData:res.data});
        }).catch(err=>{

        })
    }

    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }

    SideNavOpenClose=()=>{
        let SideNavState= this.state.SideNavState;
        let ContentOverState= this.state.ContentOverState;
        if(SideNavState==="sideNavOpen"){
            this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
        }
        else{
            this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                            <Button onClick={this.MenuBarClickHandler} className="btn navbar-brand"><i className="ml-3 fa fa-bars"></i></Button>
                            <a className="btn" href="#"> <img className="nav-logo" src={logo} alt=""/> </a>
                            <Button className="cart-btn"><i className="fa fa-shopping-cart"></i>3 items</Button>
                        </Col>
                    </Row>
                </Container>

                <div className={this.state.SideNavState}>
                    <MegaMenuMobile data={this.state.MenuData}/>
                </div>

                <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                </div>

            </Fragment>
        );
    }
}

export default NavMenuMobile;