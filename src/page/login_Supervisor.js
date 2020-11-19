import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function login_Supervisor() {
  const linkStyle = {
    color: "black",
  };
  return (
    <div>
      {/* navigation */}
      <div>
        <div className="font-57 font-goldman color-394">BRI Complaint | SPV</div>
      </div>

      {/* Main */}
      <div className="d-flex centering-content">
        <div className="container-login m-t-60">
          <div className="text-center">Login SPV Customer Service (CS)</div>
          <Form className="m-t-30">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="text-center m-t-35 m-b-35">
              <Link to="/dashboardspv" style={linkStyle} onClick={showalertsuccess}>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                  Login
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <Link to="/logincs" style={linkStyle}>
              <div>
                Customer Service <span className="color-1f0">Login</span> here
              </div>
              </Link>
              <Link to="/" style={linkStyle}>
              <div>
                Customer <span className="color-1f0">Login</span> here
              </div>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

function showalertsuccess(){
  alert("Anda Berhasil Login!!");
}

export default login_Supervisor;
