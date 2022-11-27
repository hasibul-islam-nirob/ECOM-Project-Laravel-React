import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import ApiURL from "../../api/ApiURL";
import axios from "axios";
import {Redirect} from "react-router";

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

    componentDidMount() {
        let MobileNo = this.props.MobileNo;
        this.setState({mobileNo:MobileNo})
    }

    onUserRedirect(){
        return(<Redirect to="/"/>)
    }

    onNextClick(){
        let OtpValue=  this.state.OtpNo;
        let mobileNo=  this.state.mobileNo;
        if(OtpValue.length!==6){
            toast.error("Invalid Verification Code",{position:'bottom-center'});
        }
        else{
            this.setState({btn:"Processing.."});

            let URL=ApiURL.OTPVerification;
            let MyFormData=new FormData();
            MyFormData.append('otp',OtpValue);
            MyFormData.append('mobile',mobileNo);

            axios.post(URL,{
                'otp':OtpValue,
                'mobile':mobileNo
            }).then(res=>{
                this.setState({btn:"Login"});
                if (res.data==1){
                    toast.success("Verification Success",{position:'bottom-center'});
                    this.setState({UserRedirect:true});
                }else{
                    toast.error("Verification Fail ! Try Again",{position:'bottom-center'});
                }
            }).catch(err=>{
                this.setState({btn:"Login"});
                toast.error("Verification Fail ! Try Again",{position:'bottom-center'});
            })

        }
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
                                        <button onClick={this.onNextClick} className="btn btn-block w-100 m-2 site-btn">{this.state.btn}</button>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    <h1>{this.state.mobileNo}</h1>
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

export default OtpVerification;