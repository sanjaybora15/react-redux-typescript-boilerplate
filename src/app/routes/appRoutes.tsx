import React from "react";
import {BrowserRouter as Router, Route, Switch, RouteComponentProps} from "react-router-dom";
import LandingPage from "../../containers/landing-page";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import {RoutePaths} from "../../models/routePath";
import NotFoundPage from "../../components/not-found";
import AboutUs from "../../containers/about-us";
import ContactUs from "../../containers/contact-us";

export default function AppRoutes(props: any & RouteComponentProps) {
    return (
        <Router>
            <NavBar/>
                <Switch>
                    <Route exact path={RoutePaths.HOME} component={LandingPage}/>
                    <Route exact path={RoutePaths.ABOUT_US} component={AboutUs}/>
                    <Route exact path={RoutePaths.CONTACT_US} component={ContactUs}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            <Footer/>
        </Router>
    )
}
