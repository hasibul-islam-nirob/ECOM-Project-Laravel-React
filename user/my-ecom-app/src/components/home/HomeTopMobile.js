import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class HomeTopMobile extends Component {
    constructor() {
        super();
        this.state = {
            SliderData:[]
        }
    }

    componentDidMount() {

        // slider info
        axios.get(ApiURL.sliderInfo).then(res=>{
            this.setState({SliderData:res.data});
        }).catch(err=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                    <Row className="p-0 m-0 overflow-hidden">
                        <Col className="p-0 m-0 overflow-hidden" lg={12} md={12} sm={12}>
                            <SliderHome data={this.state.SliderData}/>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTopMobile;