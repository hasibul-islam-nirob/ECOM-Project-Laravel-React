import React, {Component, Fragment} from 'react';
import HomePage from "../pages/HomePage";
import {Route, Switch} from "react-router";
import UserOnBoardPage from "../pages/UserOnBoardPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import PolicyPage from "../pages/PolicyPage";
import PurchasePage from "../pages/PurchasePage";
import Refund from "../components/others/Refund";
import RefundPage from "../pages/RefundPage";
import PaymentPolicyPage from "../pages/PaymentPolicyPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/onboard" component={UserOnBoardPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/policy" component={PolicyPage} />
                    <Route exact path="/purchase" component={PurchasePage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/paymentPolicy" component={PaymentPolicyPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;