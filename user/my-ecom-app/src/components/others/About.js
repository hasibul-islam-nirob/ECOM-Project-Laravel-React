import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import axios from "axios";
import ApiURL from "../../api/ApiURL";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DescriptionPlaceholder from "../../placeholder/DescriptionPlaceholder";
import SessionHelper from "../../SessionHelper/SessionHelper";

class About extends Component {
    constructor() {
        super();
        this.state={
            about:"",
            loaderDiv:"",
            mainDiv:"d-none",
        }
    }

    componentDidMount() {
        let siteAboutInfo = SessionHelper.getAboutSession();

        if (siteAboutInfo == null){
            axios.get(ApiURL.sendSiteInfo).then(res=>{
                let statusCode = res.status;
                if (statusCode==200){

                    let jsonData = res.data[0]['about'];
                    this.setState({about:jsonData,loaderDiv:"d-none",mainDiv:""});
                    SessionHelper.setAboutSession(jsonData);

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
            this.setState({about:siteAboutInfo,loaderDiv:"d-none",mainDiv:""});
        }

    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Breadcrumb className="shadow-sm mt-2 bg-white">
                        <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                        <Breadcrumb.Item> <Link to="/about">About</Link>    </Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>
                            <Card >
                                <Card.Body>
                                    <DescriptionPlaceholder isLoading={this.state.loaderDiv}/>
                                    <div className={this.state.mainDiv}>
                                        <div className="animated zoomIn">
                                            { ReactHtmlParser(this.state.about) }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <ToastContainer/>
            </Fragment>
        );
    }
}

export default About;