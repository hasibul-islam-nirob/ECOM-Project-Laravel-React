import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ToastContainer} from "react-toastify";

class OtpVerification extends Component {

    constructor() {
        super();
        this.state={
            btn:"Login",
            OtpNo:"",
            UserRedirect:false,
            mobileNo:"",
        }
        this.OtpOnChange=this.OtpOnChange.bind(this);
        this.onNextClick=this.onNextClick.bind(this);
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }

    OtpOnChange(event){
        let OtpValue=  event.target.value;
        this.setState({OtpNo:OtpValue})
    }

    onUserRedirect(){

    }

    render() {
        return (

            <Fragment>
                <Container className="TopSection animated slideInDown">
                    <Row className="d-flex justify-content-center">
                        <Col className="shadow-sm bg-white mt-2" md={6} lg={6} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={12} lg={12} sm={12} xs={12}>
                                    <div className="onboardForm">
                                        <h4 className="section-title">Verification Code</h4>
                                        <h6 className="section-sub-title">Please Enter 6 Digit Verification Code</h6>
                                        <input onChange={this.OtpOnChange} className="form-control m-2" type="text" placeholder="xxxxxx"/>
                                        <button onClick='' className="btn btn-block m-2 site-btn">{this.state.btn}</button>
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

export default OtpVerification;