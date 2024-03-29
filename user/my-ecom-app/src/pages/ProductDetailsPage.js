import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import axios from "axios";
import ApiURL from "../api/ApiURL";
import ProductDetailsPlaceholder from "../placeholder/ProductDetailsPlaceholder";

class ProductDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            code:match.params.code,
            ProductData:[],
            isLoading:"BetweenTwoSection",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        window.scroll(0,0);

        axios.get(ApiURL.ProductDetails(this.state.code)).then(res=>{
            this.setState({ProductData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }

    render() {

        if(this.state.MainDiv==="d-none"){
            return (
                <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop/>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile/>
                    </div>
                    <ProductDetailsPlaceholder isLoading={this.state.isLoading}/>
                    <div className="Desktop">
                        <FooterDesktop/>
                    </div>
                    <div className="Mobile">
                        <FooterMobile/>
                    </div>
                </Fragment>
            );
        }
        else{
            return (
                <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop/>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile/>
                    </div>
                    <ProductDetails ProductData={this.state.ProductData}/>
                    <div className="Desktop">
                        <FooterDesktop/>
                    </div>
                    <div className="Mobile">
                        <FooterMobile/>
                    </div>
                </Fragment>
            );
        }

    }
}

export default ProductDetailsPage;