
class Validation{
    static msgRegx = /^([a-zA-Z., ]){2,500}$/;
    static nameRegx = /^([a-zA-Z ]){2,20}$/;
    static mobileRegx = /^(?:\+88|01)?\d{11}\r?$/; // for bangladesh
    static emailRegx = /\S+@\S+\.\S+/;

}
export default Validation;