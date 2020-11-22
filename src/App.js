import React, { Fragment } from "react";
import LoginCustomer from "./page/LoginCustomer";
import LoginCustomerService from "./page/LoginCustomerService";
import LoginSupervisor from "./page/LoginSupervisor";
import SignupCustomer from "./page/SignupCustomer";
import TicketListCs from "./page/customer/TicketListCs"
import DashboardSpv from "./page/spv/Dashboard_Spv";
import DashboardCustomerService from "./page/customer_service/DashboardCustomerService";
import MyTicketCS from "./page/customer_service/MyTicketCs";
import MyTicketSpv from "./page/spv/MyTicketSpv";
import DetailCS from "./page/spv/DetailCS";
import ForgotPassword from "./page/ForgotPassword";
import ChangePassword from "./page/ChangePassword";
// import Navbar from './page/customer/Navbar';
// import TicketListCs from './page/customer/TicketListCs';
import FooterWeb from "./component/Footer"
// import AddCSAccount from './page/addCSAccount';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      {/*<Navbar/>*/}
      <div className="padding-lr-20 body">
        {/* <AddCSAccount /> */}
        <Fragment>
          <Route path="/" component={LoginCustomer} exact />
          <Route path="/logincs" component={LoginCustomerService} exact />
          <Route path="/loginspv" component={LoginSupervisor} exact />
          <Route path="/signupcustomer" component={SignupCustomer} exact />
          <Route path="/dashboardcustomer" component={TicketListCs} exact />
          <Route path="/dashboardcs" component={DashboardCustomerService} exact />
          <Route path="/dashboardspv" component={DashboardSpv} exact />
          <Route path="/myticketcs" component={MyTicketCS} exact />
          <Route path="/myticketspv" component={MyTicketSpv} exact />
          <Route path="/detailratingcs" component={DetailCS} exact />
          <Route path="/forgotpassword" component={ForgotPassword} exact />
          <Route path="/changepassword" component={ChangePassword} exact />
        </Fragment>
      </div>
      <FooterWeb />
    </BrowserRouter>
  )
}

export default App;
