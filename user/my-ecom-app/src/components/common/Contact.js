import React, {Component, Fragment} from 'react';
import {Breadcrumb, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import Validation from "../../velidation/Validation";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name:"name",
            mobile:"mobile",
            email:"email",
            message:"message",
            sendBtn:"Send"
        }
    }

    nameOnChange=(event)=>{
        let name = event.target.value;
        this.setState({name:name});
    }
    mobileOnChange=(event)=>{
        let mobile = event.target.value;
        this.setState({mobile:mobile});
    }
    emailOnChange=(event)=>{
        let email = event.target.value;
        this.setState({email:email});
    }
    msgOnChange=(event)=>{
        let msg = event.target.value;
        this.setState({message:msg});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();

        let name = this.state.name;
        let mobile = this.state.mobile;
        let email = this.state.email;
        let message = this.state.message;

        let sendBtn = document.getElementById('sendBtn');
        let contactForm = document.getElementById('contactForm');

        if (name.length === 0){
            toast.error("Name empty",{
                theme:"colored"
            });
        }else if (!Validation.nameRegx.test(name)){
            toast.error("Name Type False",{
                theme:"colored"
            });
        }else if (mobile.length === 0){
            toast.error("Mobile empty",{
                theme:"colored"
            });
        }else if (!Validation.mobileRegx.test(mobile)){
            toast.error("mobile Type False",{
                theme:"colored"
            });
        }else if (email.length === 0){
            toast.error("email empty",{
                theme:"colored"
            });
        }else if (!Validation.emailRegx.test(email)){
            toast.error("email Type False",{
                theme:"colored"
            });
        }else if (message.length === 0){
            toast.error("msg empty",{
                theme:"colored"
            });
        }else if (!Validation.msgRegx.test(message)){
            toast.error("msg Type False",{
                theme:"colored"
            });
        }else{
            sendBtn.innerHTML = " Sending....";

            let MyFormData = new FormData();
            MyFormData.append('name',name);
            MyFormData.append('mobile',mobile);
            MyFormData.append('email',email);
            MyFormData.append('message',message);

            let url = ApiURL.sendContactDetails;
            axios.post(url, MyFormData).then(function (res){
                if (res.status == 200 && res.data==1){
                    toast.success("Success",{
                        theme:"colored"
                    })
                    sendBtn.innerHTML = "Send";
                    contactForm.reset();
                }else{
                    toast.error("Fail",{
                        theme:"colored"
                    });
                    sendBtn.innerHTML = "Send";
                    contactForm.reset();
                }
            }).catch(function (err){
                toast.error("Wrong :"+err,{
                    theme:"colored"
                });
                sendBtn.innerHTML = "Send";
                contactForm.reset();
            })
        }


    }

    render() {
        return (
            <Fragment>

                <Container>
                    <Row>
                        <Breadcrumb className="shadow-sm TopSection w-100 bg-white py-3">
                            <Breadcrumb.Item> <Link to="/">Home</Link> </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/contact">Contact</Link> </Breadcrumb.Item>
                        </Breadcrumb>
                        <Col className="shadow-sm mt-1 animated slideInDown bg-white " md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.onFormSubmit} id="contactForm"  className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.mobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Email Address"/>
                                        <textarea onChange={this.msgOnChange} className="form-control m-2" type="text" placeholder="Message"></textarea>
                                        <button id="sendBtn" type="submit" className="btn btn-danger m-2 site-btn contactFormBtn">Send</button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9009669046704!2d90.38828391450218!3d23.750910694674705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1601135282389!5m2!1sen!2sbd" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <ToastContainer/>
            </Fragment>
        );
    }
}

export default Contact;