class ApiURL{

    static BaseURL = "https://ecom-admin.hinirob.com/api/";

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

    static ProductListBySubCategory(SubCategory){
        return this.BaseURL+"ProductListBySubCategoryPage/"+SubCategory;
    }

}
export default ApiURL;