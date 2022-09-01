import React, {Component, Fragment} from 'react';
import HomePage from "../pages/HomePage";
import {Route, Switch} from "react-router";
import UserOnBoardPage from "../pages/UserOnBoardPage";
import ContactPage from "../pages/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/onboard" component={UserOnBoardPage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;