import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SliderLoader from "../../placeholder/SliderLoader";

class HomeTop extends Component {

    constructor() {
        super();
        this.state = {
            MenuData:[],
            SliderData:[],
            isLoading:"TopSection",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiURL.sendCategoryDetails).then(res=>{
            this.setState({MenuData:res.data});
        }).catch(err=>{

        })

        // slider info
        axios.get(ApiURL.sliderInfo).then(res=>{
            this.setState({SliderData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }

    render() {
        return (
            <Fragment>

                <SliderLoader isLoading={this.state.isLoading}/>

                <div className={this.state.MainDiv}>
                    <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                        <Row className="p-0 m-0 overflow-hidden">
                            <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                                <MegaMenu data={this.state.MenuData}/>
                            </Col>
                            <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                                <SliderHome data={this.state.SliderData}/>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default HomeTop;