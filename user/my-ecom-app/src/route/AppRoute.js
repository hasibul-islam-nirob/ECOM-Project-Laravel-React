import React, {Component, Fragment} from 'react';
import HomePage from "../pages/HomePage";
import {Route, Switch} from "react-router";
import UserOnBoardPage from "../pages/UserOnBoardPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import PolicyPage from "../pages/PolicyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import PaymentPolicyPage from "../pages/PaymentPolicyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import ProductListByCategoryPage from "../pages/ProductListByCategoryPage";
import ProductListBySubCategoryPage from "../pages/ProductListBySubCategoryPage";
import SearchPage from "../pages/SearchPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props)=> <HomePage {...props} key={Date.now()} />} />
                    <Route exact path="/onboard" render={(props)=> <UserOnBoardPage {...props} key={Date.now()} />} />
                    <Route exact path="/contact" render={(props)=> <ContactPage {...props} key={Date.now()}  />} />
                    <Route exact path="/about" render={(props)=> <AboutPage {...props} key={Date.now()}  />} />
                    <Route exact path="/policy" render={(props)=> <PolicyPage {...props} key={Date.now()}  />} />
                    <Route exact path="/purchase" render={(props)=> <PurchasePage {...props} key={Date.now()}  />} />
                    <Route exact path="/refund" render={(props)=> <RefundPage {...props} key={Date.now()} />} />
                    <Route exact path="/paymentPolicy" render={(props)=> <PaymentPolicyPage {...props} key={Date.now()} />} />
                    <Route exact path="/productDetails/:code" render={(props)=> <ProductDetailsPage {...props} key={Date.now()} />}/>
                    <Route exact path="/notificationPage" render={(props)=> <NotificationPage {...props} key={Date.now()} />}/>
                    <Route exact path="/favouritePage" render={(props)=> <FavouritePage {...props} key={Date.now()} />} />
                    <Route exact path="/cartList" render={(props)=> <CartPage {...props} key={Date.now()} />} />
                    <Route exact path="/ProductListByCategory/:Category" render={(props)=> <ProductListByCategoryPage {...props} key={Date.now()} />} />
                    <Route exact path="/ProductListBySubCategory/:Category/:SubCategory" render={(props)=> <ProductListBySubCategoryPage {...props} key={Date.now()} />} />
                    <Route exact path="/ProductListBySearch/:SearchKey" render={(props)=> <SearchPage {...props} key={Date.now()} />} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;