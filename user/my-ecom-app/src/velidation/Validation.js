
class Validation{
    static msgRegx = /^([a-zA-Z., ]){2,500}$/;
    static nameRegx = /^([a-zA-Z ]){2,20}$/;
    static mobileRegx = /^(?:\+?88|0088)?01[15-9]\d{8}$/; // for bangladesh
    static emailRegx = /\S+@\S+\.\S+/;

}
export default Validation;