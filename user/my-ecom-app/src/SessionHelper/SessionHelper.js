import PaymentPolicy from "../components/others/PaymentPolicy";

class SessionHelper{

    static setAboutSession(jsonData){
        sessionStorage.setItem("siteAboutInfo", jsonData);
    }
    static getAboutSession(){
        return sessionStorage.getItem("siteAboutInfo");
    }
//============================
    static setPaymentPolicySession(jsonData){
        sessionStorage.setItem("sitePaymentInfo", jsonData);
    }
    static getPaymentPolicySession(){
        return sessionStorage.getItem("sitePaymentInfo");
    }
//=====================================
    static setPolicySession(jsonData){
        sessionStorage.setItem("sitePolicyInfo", jsonData);
    }
    static getPolicySession(){
        return sessionStorage.getItem("sitePolicyInfo");
    }
//============================
    static setPurchaseSession(jsonData){
        sessionStorage.setItem("sitePurchaseInfo", jsonData);
    }
    static getPurchaseSession(){
        return sessionStorage.getItem("sitePurchaseInfo");
    }
//============================
    static setRefundSession(jsonData){
        sessionStorage.setItem("siteRefundInfo", jsonData);
    }
    static getRefundSession(){
        return sessionStorage.getItem("siteRefundInfo");
    }
//===================================
    static setUserMobile(UserMobile){
        sessionStorage.setItem("UserMobile", UserMobile);
    }
    static getUserMobile(){
        return sessionStorage.getItem("UserMobile");
    }
    static removeUserMobile(){
        return sessionStorage.removeItem("UserMobile");
    }

    static SetRedirectFromDetails(winlocation){
        sessionStorage.setItem("winlocation",winlocation)
    }

    static GetRedirectFromDetails(){
        return sessionStorage.getItem("winlocation");
    }


}
export default SessionHelper;