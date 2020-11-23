import React, { Fragment } from "react";
import LoginCustomer from "./page/LoginCustomer";
import LoginCustomerService from "./page/LoginCustomerService";
import LoginSupervisor from "./page/LoginSupervisor";
import SignupCustomer from "./page/SignupCustomer";
import DashboardSpv from "./page/spv/dashboard_spv/DashboardSpv";
import DashboardCs from "./page/customer_service/dashboard_cs/DashboardCs";
import InitTicket from './page/customer/dashboard_customer/InitTicket';
import DashboardCustomer from './page/customer/dashboard_customer/DashboardCustomer';
import FooterWeb from "./component/Footer";
import AddCSAccount from './page/spv/cs_list/AddCsAccount';
import ReplyFormSpv from './page/spv/my_ticket/ReplyForm';
import ReplyForm from './page/customer_service/my_ticket/ReplyForm';
import CsList from './page/spv/cs_list/CsList';
import MyTicketCs from './page/customer_service/my_ticket/MyTicketCs';
import MyTicketSpv from './page/spv/my_ticket/MyTicketSpv';
import ForgotPassword from "./page/ForgotPassword";
import "./App.css";
import "./animate.css";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            {/*<Navbar/>*/}
            <div className="padding-lr-20 body background">
                {/* <AddCSAccount /> */}
                <Fragment>
                    <Route path="/" component={LoginCustomer} exact/>
                    <Route path="/logincs" component={LoginCustomerService} exact/>
                    <Route path="/loginspv" component={LoginSupervisor} exact/>
                    <Route path="/signupcustomer" component={SignupCustomer} exact/>
                    <Route path="/dashboardspv" component={DashboardSpv} exact/>
                    <Route path="/dashboardcs" component={DashboardCs} exact/>
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
