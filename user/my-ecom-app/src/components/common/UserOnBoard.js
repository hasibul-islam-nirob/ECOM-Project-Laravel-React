import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import validation from '../../velidation/Validation'
import {Redirect} from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiURL from "../../api/ApiURL";


class UserOnBoard extends Component {
    constructor(match) {
        super();
        this.state={
            btn:"Next",
            MobileNo:"",
            UserRedirect:false
        }
        this.MobileOnChange=this.MobileOnChange.bind(this);
        this.onNextClick=this.onNextClick.bind(this);
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    onUserRedirect(){
        if(this.state.UserRedirect == true){
            return <Redirect to={"/OtpVerification"} />
        }
    }

    MobileOnChange(event){
        let mobile=  event.target.value;
        this.setState({MobileNo:mobile});

    }

    onNextClick(){
        let mobile= this.state.MobileNo;
        if(mobile.length===0){
            toast.error('Mobile Number Required', {position: "bottom-center"});

        } else if(!(validation.mobileRegx).test(mobile)){
            toast.error("Invalid Mobile Number",{position:'bottom-center'});

        } else {
            this.setState({UserRedirect:true});

            this.setState({btn:"Processing.."});
            axios.get(ApiURL.CreateOTP(mobile)).then(res=>{
                this.setState({btn:"Next"});
                if (res.status==200 && res.data==1){
                    toast.error("Verification code has been sent",{position:'bottom-center'});
                    this.setState({UserRedirect:true});
                }else{
                    toast.error("Request Fail ! Try Again",{position:'bottom-center'});
                }
            }).catch(err=>{
                this.setState({btn:"Next"});
                toast.error("Request Fail ! Try Again",{position:'bottom-center'});
            })
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
                {this.onUserRedirect()}
            </Fragment>
        );
    }
}

export default UserOnBoard;