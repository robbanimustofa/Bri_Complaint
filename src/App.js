import React, { Fragment } from "react";
import LoginCustomer from "./page/LoginCustomer";
import LoginCustomerService from "./page/LoginCustomerService";
import LoginSupervisor from "./page/LoginSupervisor";
import SignupCustomer from "./page/SignupCustomer";
import DashboardSpv from "./page/spv/Dashboard_Spv";
import DashboardCustomerService from "./page/customer_service/DashboardCustomerService";
import InitTicket from './page/customer/InitTicket';
import DashboardCustomer from './page/customer/DashboardCustomer';
import FooterWeb from "./component/Footer";
import AddCSAccount from './page/AddCSAccount';
import ReplyFormSpv from './page/spv/ReplyForm';
import ReplyForm from './page/customer_service/ReplyForm';
import CsList from './page/spv/CsList';
import MyTicketCs from './page/customer_service/MyTicketCs';
import MyTicketSpv from './page/spv/MyTicketSpv';
import ForgotPassword from "./page/ForgotPassword";
import "./App.css";
import "./animate.css";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            {/*<Navbars/>*/}
            <div className="padding-lr-20 body">
                {/* <AddCSAccount /> */}
                <Fragment>
                    <Route path="/" component={LoginCustomer} exact/>
                    <Route path="/logincs" component={LoginCustomerService} exact/>
                    <Route path="/loginspv" component={LoginSupervisor} exact/>
                    <Route path="/signupcustomer" component={SignupCustomer} exact/>
                    <Route path="/dashboardspv" component={DashboardSpv} exact/>
                    <Route path="/dashboardcs" component={DashboardCustomerService} exact/>
                    <Route path="/dashboardcustomer" component={DashboardCustomer} exact/>
                    <Route path="/createticket" component={InitTicket} exact/>
                    <Route path="/addcsaccount" component={AddCSAccount} exact/>
                    <Route path="/replyformcs" component={ReplyForm} exact/>
                    <Route path="/replyformspv" component={ReplyFormSpv} exact/>
                    <Route path="/myticketcs" component={MyTicketCs} exact/>
                    <Route path="/myticketspv" component={MyTicketSpv} exact/>
                    <Route path="/cslist" component={CsList} exact/>
                    <Route path="/forgotpass" component={ForgotPassword} exact/>
                </Fragment>
            </div>
            <FooterWeb/>
        </BrowserRouter>
    )
}

export default App;
