import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

class FooterMobile extends Component {

    constructor() {
        super();
        this.state={
            footerData:"",
            androidLink:"",
            iosLink:"",
            facebookLink:"",
            twitterLink:"",
            instagramLink:"",
            address:"",
            aboutCompany:"",
            deliveryNotice:"",
            loaderDiv:"",
            mainDiv:"d-none",
        }
    }

    componentDidMount() {
        let siteFooterInfo = sessionStorage.getItem("siteFooterInfo");

        if (siteFooterInfo == null){
            axios.get(ApiURL.sendSiteInfo).then(res=>{
                let statusCode = res.status;
                if (statusCode==200){

                    let jsonData = res.data[0];
                    this.setState({
                        androidLink:jsonData['android_app_link'],
                        iosLink:jsonData['ios_app_link'],
                        facebookLink:jsonData['facebook_link'],
                        twitterLink:jsonData['twitter_link'],
                        instagramLink:jsonData['instagram_link'],
                        address:jsonData['address'],
                        aboutCompany:jsonData['about_company'],
                        deliveryNotice:jsonData['delivery_notice'],
                        loaderDiv:"d-none",
                        mainDiv:""
                    });

                    sessionStorage.setItem("siteFooterInfo", JSON.stringify(jsonData));

                }else{
                    toast.error("Data Not Found, Try Again",{
                        position: "top-right",
                        theme:"colored"
                    });
                }
            }).catch(err=>{
                toast.error('🦄 Something went wrong....!', {
                    position: "top-right",
                    theme:"colored"
                });
            })
        }else{
            let footerDataJSON = JSON.parse(siteFooterInfo);
            this.setState({
                androidLink:footerDataJSON['android_app_link'],
                iosLink:footerDataJSON['ios_app_link'],
                facebookLink:footerDataJSON['facebook_link'],
                twitterLink:footerDataJSON['twitter_link'],
                instagramLink:footerDataJSON['instagram_link'],
                address:footerDataJSON['address'],
                aboutCompany:footerDataJSON['about_company'],
                deliveryNotice:footerDataJSON['delivery_notice'],
                loaderDiv:"d-none",
                mainDiv:""
            });
        }

    }

    render() {
        return (
            <div className="card">
                <Container fluid={true}>
                    <Row className="px-0 my-5">
                        <Col className="p-2" sm={6} xm={6}>
                            <h5 className="footer-menu-title">Social Link</h5>
                            <a target="_blank" href={this.state.facebookLink}> <i className="m-1 h4 fab fa-facebook"></i> </a>
                            <a target="_blank" href={this.state.instagramLink}> <i className="m-1 h4 fab fa-instagram"></i> </a>
                            <a target="_blank" href={this.state.twitterLink}> <i className="m-1 h4 fab fa-twitter"></i> </a>
                        </Col>

                        <Col className="p-2" sm={6} xm={6}>
                            <h5 className="footer-menu-title">Office Address</h5>
                            <p>{ReactHtmlParser(this.state.address)}</p>

                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">More Info</h5>
                            <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                            <Link to="/policy" className="footer-link">Privacy Policy</Link><br/>
                            <Link to="/refund" className="footer-link">Refund Policy</Link><br/>
                            <Link to="/paymentPolicy" className="footer-link">Payment Policy</Link><br/>

                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">Download Apps</h5>
                            <a target="_blank" href={this.state.androidLink} className="footer-link">Android</a><br/>
                            <a target="_blank" href={this.state.iosLink} className="footer-link">ISO</a><br/>

                            <div id="google_translate_element"></div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                    <Container>
                        <Row className="px-0 text-white">
                            <p>{ReactHtmlParser(this.state.deliveryNotice)}</p>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default FooterMobile;