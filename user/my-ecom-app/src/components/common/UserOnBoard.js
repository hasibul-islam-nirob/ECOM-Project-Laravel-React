import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import validation from '../../velidation/Validation'
import {Redirect} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class UserOnBoard extends Component {
    constructor() {
        super();
        this.state={
            btn:"Next",
            MobileNo:"",
            UserRedirect:false
        }
        this.MobileOnChange=this.MobileOnChange.bind(this);
        this.onNextClick=this.onNextClick.bind(this);
    }

    MobileOnChange(event){
        let mobile=  event.target.value;
        this.setState({MobileNo:mobile});

    }

    onNextClick(){
        let mobile= this.state.MobileNo;
        if(mobile.length===0){
            toast.error('Mobile Number Required', {position: "bottom-center"});
        }
        else if(!(validation.mobileRegx).test(mobile)){
            toast.error("Invalid Mobile Number",{position:'bottom-center'});
        }
        else {
            alert(mobile)
        }
    }



    render() {
        return (
            <Fragment>
                <Container className="TopSection animated slideInDown">
                    <Row className="d-flex p-1 justify-content-center">
                        <Col className="shadow-sm bg-white mt-2 justify-content-center" md={6} lg={6} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className=" justify-content-center" md={12} lg={12} sm={12} xs={12}>
                                    <div className="onboardForm">
                                        <h4 className="section-title">USER SIGN IN</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.MobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <button onClick={this.onNextClick} className="btn btn-block w-100 m-2 site-btn">{this.state.btn}</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    //theme="light"
                    theme="colored"
                />
            </Fragment>
        );
    }
}

export default UserOnBoard;