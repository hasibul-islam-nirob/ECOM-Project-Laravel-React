import React, {Component, Fragment} from 'react';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class ReviewList extends Component {

    constructor() {
        super();
        this.state={
            ReviewListData:[]
        }
    }

    componentDidMount() {
        const productCode=this.props.productCode;
        axios.get(ApiURL.ReviewList(productCode)).then(res=>{
            this.setState({ReviewListData:res.data});
        }).catch(err=>{

        })
    }

    render() {
        let ReviewListData = this.state.ReviewListData;

        if (ReviewListData.length > 0){
            const myView = ReviewListData.map((List, i)=>{

                if (List.reviewer_rating == 1){
                    return <span>
                    <p className="p-0 m-0">
                        <span className="Review-Title">{List.reviewer_name} </span>
                        <span>
                            <i className="fa fa-star text-success"></i>
                        </span>
                    </p>
                    <p>{List.reviewer_comment}</p>
                </span>

                }else if(List.reviewer_rating == 2){
                    return <span>
                    <p className="p-0 m-0">
                        <span className="Review-Title">{List.reviewer_name} </span>
                        <span>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                        </span>
                    </p>
                    <p>{List.reviewer_comment}</p>
                </span>

                }else if(List.reviewer_rating == 3){
                    return <span>
                    <p className="p-0 m-0">
                        <span className="Review-Title">{List.reviewer_name} </span>
                        <span>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                        </span>
                    </p>
                    <p>{List.reviewer_comment}</p>
                </span>

                }else if(List.reviewer_rating == 4){
                    return <span>
                    <p className="p-0 m-0">
                        <span className="Review-Title">{List.reviewer_name} </span>
                        <span>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                        </span>
                    </p>
                    <p>{List.reviewer_comment}</p>
                </span>

                }else if(List.reviewer_rating == 5){
                    return <span>
                    <p className="p-0 m-0">
                        <span className="Review-Title">{List.reviewer_name} </span>
                        <span>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                            <i className="fa fa-star text-success"></i>
                        </span>
                    </p>
                    <p>{List.reviewer_comment}</p>
                </span>

                }

            })

            return (
                <Fragment>
                    <div className="shadow-sm p-3 bg-white">
                        <h5 className="mt-2">Reviews</h5>
                        {myView}
                    </div>
                </Fragment>
            );

        }else{
            return <div>
                <h5 className="shadow-sm p-3 bg-white mt-2">No Reviews</h5>
            </div>
        }


    }
}

export default ReviewList;