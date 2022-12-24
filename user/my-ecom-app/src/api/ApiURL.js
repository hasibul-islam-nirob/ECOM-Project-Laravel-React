class ApiURL{

    static BaseURL = "https://ecom-admin.hinirob.com/api/";
    //static BaseURL = "http://127.0.0.1:8000/api/";

    static visitorDetails = this.BaseURL+"getVisitorInfo";
    static sendContactDetails = this.BaseURL+"sendContactDetails";
    static sendSiteInfo = this.BaseURL+"sendSiteInfo";
    static sendCategoryDetails = this.BaseURL+"sendCategoryDetails";
    static ProductListByRemark(Remark){
        return this.BaseURL+"ProductListByRemark/"+Remark;
    }
    static ProductListByCategory(Category){
        return this.BaseURL+"ProductListByCategory/"+Category;
    }
    static ProductListBySubCategory(Category,SubCategory){
        return this.BaseURL+"ProductListBySubCategory/"+Category+"/"+SubCategory;
    }
    static sliderInfo = this.BaseURL+"sliderInfo";
    static ProductDetails(productCode){
        return this.BaseURL+"productDetails/"+productCode;
    }
    static NotificationHistory = this.BaseURL+"NotificationHistory";

    static ProductBySearch(SearchKey){
        return this.BaseURL+"ProductBySearch/"+SearchKey;
    }

    static CreateOTP = this.BaseURL+"CreateOTP";

    // static CreateOTP(Mobile){
    //     return this.BaseURL+"CreateOTP/"+Mobile;
    // }
    static OTPVerification = this.BaseURL+"OTPVerification";

    static SimilarProduct(Category){
        return this.BaseURL+"SimilarProduct/"+Category;
    }
    static ReviewList(productCode){
        return this.BaseURL+"ReviewList/"+productCode;
    }

}
export default ApiURL;