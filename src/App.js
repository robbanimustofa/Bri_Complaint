import React, { Fragment } from "react";
import LoginCustomer from "./page/login_Customer";
import LoginCustomerService from "./page/login_CustomerService";
import LoginSupervisor from "./page/login_Supervisor";
import SignupCustomer from "./page/signupCustomer";
import DashboardSpv from "./page/spv/Dashboard_Spv"
import Navbar from './page/customer/Navbar';
// import TicketListCs from './page/customer/TicketListCs';
import FooterWeb from "./component/footer"
// import AddCSAccount from './page/addCSAccount';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="padding-lr-20 body">
        {/* <AddCSAccount /> */}
        <Fragment>
          <Route path="/logincs" component={LoginCustomerService} exact />
          <Route path="/" component={LoginCustomer} exact />
          <Route path="/loginspv" component={LoginSupervisor} exact />
          <Route path="/signupcustomer" component={SignupCustomer} exact />
          <Route path="/dashboardspv" component={DashboardSpv} exact />
        </Fragment>
      </div>
      <FooterWeb/>
    </BrowserRouter>
  )
}

export default App;
