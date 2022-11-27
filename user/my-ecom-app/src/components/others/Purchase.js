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

class Purchase extends Component {

    constructor() {
        super();
        this.state={
            PurchaseGuide:"",
            loaderDiv:"",
            mainDiv:"d-none",
        }
    }

    componentDidMount() {
        let PurchaseGuide = SessionHelper.getPurchaseSession();

        if (PurchaseGuide == null){
            axios.get(ApiURL.sendSiteInfo).then(res=>{
                let statusCode = res.status;
                if (statusCode==200){

                    let jsonData = res.data[0]['purchase_guid'];
                    this.setState({PurchaseGuide:jsonData,loaderDiv:"d-none",mainDiv:""});
                    SessionHelper.setPurchaseSession(jsonData);

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
            this.setState({PurchaseGuide:PurchaseGuide,loaderDiv:"d-none",mainDiv:""});
        }

    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Breadcrumb className="shadow-sm mt-2 bg-white">
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/purchase">Purchase</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <DescriptionPlaceholder isLoading={this.state.loaderDiv}/>
                                    <div className={this.state.mainDiv}>
                                        <div className="animated zoomIn">
                                            { ReactHtmlParser(this.state.PurchaseGuide) }
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

export default Purchase;