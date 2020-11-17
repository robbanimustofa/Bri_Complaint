import React, { Fragment } from "react";
import LoginCustomer from "./page/login_Customer";
import LoginCustomerService from "./page/login_CustomerService";
import LoginSupervisor from "./page/login_Supervisor";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="padding-lr-20 body">
        <Fragment>
          <Route path="/logincs" component={LoginCustomerService} exact />
          <Route path="/" component={LoginCustomer} exact />
          <Route path="/loginspv" component={LoginSupervisor} exact />
        </Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
