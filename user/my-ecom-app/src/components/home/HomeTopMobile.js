import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SliderLoaderMobile from "../../placeholder/SliderLoaderMobile";

class HomeTopMobile extends Component {
    constructor() {
        super();
        this.state = {
            SliderData:[],
            isLoading:"TopSection",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {

        // slider info
        axios.get(ApiURL.sliderInfo).then(res=>{
            this.setState({SliderData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }

    render() {
        return (
            <Fragment>

                <SliderLoaderMobile isLoading={this.state.isLoading} />

                <div className={this.state.MainDiv}>
                    <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                        <Row className="p-0 m-0 overflow-hidden">
                            <Col className="p-0 m-0 overflow-hidden" lg={12} md={12} sm={12}>
                                <SliderHome data={this.state.SliderData}/>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default HomeTopMobile;