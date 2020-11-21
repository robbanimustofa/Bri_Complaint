import React, { Fragment } from "react";
import LoginCustomer from "./page/LoginCustomer";
import LoginCustomerService from "./page/LoginCustomerService";
import LoginSupervisor from "./page/LoginSupervisor";
import SignupCustomer from "./page/SignupCustomer";
import DashboardSpv from "./page/spv/Dashboard_Spv";
import DashboardCustomerService from "./page/customer_service/DashboardCustomerService";
import InitTicket from './page/customer/InitTicket'
import background from './background.jpg'
// import Navbar from './page/customer/Navbar';
// import TicketListCs from './page/customer/TicketListCs';
import FooterWeb from "./component/Footer"
// import AddCSAccount from './page/addCSAccount';
import "./App.css";
import "./animate.css";
import { BrowserRouter, Route } from "react-router-dom";
import ReplyForm from './page/spv/ReplyForm'
// import ReplyForm from './page/customer_service/ReplyForm'
// import CsList from './page/spv/CsList'

function App() {
    return (
        <BrowserRouter>
            {/*<Navbar/>*/}
            <div className="padding-lr-20 body background"
                 style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
                {/* <AddCSAccount /> */}
                <Fragment>
                    <Route path="/logincs" component={LoginCustomerService} exact/>
                    <Route path="/" component={LoginCustomer} exact/>
                    <Route path="/loginspv" component={LoginSupervisor} exact/>
                    <Route path="/signupcustomer" component={SignupCustomer} exact/>
                    <Route path="/dashboardspv" component={DashboardSpv} exact/>
                    <Route path="/dashboardcs" component={DashboardCustomerService} exact/>
                </Fragment>
            </div>
            <FooterWeb/>
        </BrowserRouter>
    )
}

export default App;
