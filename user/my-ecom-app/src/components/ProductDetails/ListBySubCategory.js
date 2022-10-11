import React, {Component, Fragment} from 'react';
import {Breadcrumb, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

class ListBySubCategory extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Breadcrumb className="shadow-sm mt-2 bg-white">
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/SubCategory">Sub Category</Link></Breadcrumb.Item>
                    </Breadcrumb>


                </Container>
            </Fragment>
        );
    }
}

export default ListBySubCategory;