import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";
import CategoryPlaceholder from "../../placeholder/CategoryPlaceholder";

class Categories extends Component {

    constructor() {
        super();
        this.state = {
            MenuData:[],
            isLoading:"BetweenTwoSection",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiURL.sendCategoryDetails).then(res=>{
            this.setState({MenuData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }

    render() {

        const MyList = this.state.MenuData;
        const MyView = MyList.map((ParentList,i)=>{
            return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={3} xs={3}>
                <Link to={"ProductListByCategory/"+ParentList.parentsCategoryName} >
                <Card className=" card">
                    <img className="w-100" src={ParentList.parentsCategoryImg} alt=""/>
                    <Card.Body>
                        <h6 className="category-name">{ParentList.parentsCategoryName}</h6>
                    </Card.Body>
                </Card>
                </Link>
            </Col>
        });

        return (
            <Fragment>

                <CategoryPlaceholder isLoading={this.state.isLoading}/>

                <div className={this.state.MainDiv}>
                <Container className="text-center mx-1 py-5" fluid={true}>
                    <h5 className="section-title">CATEGORIES</h5>
                    <p className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</p>
                        <Row>
                            {MyView}
                        </Row>
                </Container>
                </div>
            </Fragment>
        );
    }
}

export default Categories;