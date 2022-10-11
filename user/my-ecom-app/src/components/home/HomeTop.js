import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class HomeTop extends Component {

    constructor() {
        super();
        this.state = {
            MenuData:[]
        }
    }

    componentDidMount() {
        axios.get(ApiURL.sendCategoryDetails).then(res=>{
            this.setState({MenuData:res.data});
        }).catch(err=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                    <Row className="p-0 m-0 overflow-hidden">
                        <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                            <MegaMenu data={this.state.MenuData}/>
                        </Col>
                        <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                            <SliderHome/>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;