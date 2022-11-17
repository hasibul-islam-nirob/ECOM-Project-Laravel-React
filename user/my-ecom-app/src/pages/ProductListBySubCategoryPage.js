import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ListByCategory from "../components/ProductDetails/ListByCategory";
import axios from "axios";
import ApiURL from "../api/ApiURL";
import ListBySubCategory from "../components/ProductDetails/ListBySubCategory";
import ProductListLoader from "../placeholder/ProductListLoader";

class ProductListBySubCategoryPage extends Component {

    constructor({match}) {
        super();
        this.state={
            Category:match.params.Category,
            SubCategory:match.params.SubCategory,
            ProductData:[],
            isLoading:"",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        window.scroll(0,0)

        axios.get(ApiURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory)).then(res=>{
            this.setState({ProductData:res.data, isLoading:"d-none", MainDiv:" "});
        }).catch(err=>{

        })
    }

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>

                <ProductListLoader isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <ListBySubCategory SubCategory={this.state.SubCategory} Category={this.state.Category} ProductData={this.state.ProductData}/>
                </div>

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

export default ProductListBySubCategoryPage;