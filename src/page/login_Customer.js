import React from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function login_Customer() {
  const linkStyle = {
    color: "black",
  };

  return (
    <div>
      {/* navigation */}
      <div>
        <div className="font-57">BRI Complain</div>
      </div>

      {/* Main */}
      <div className="container-login m-t-60">
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
            <Button variant="primary" size="lg" className="btn-large">
              Login
            </Button>
          </div>

          <div className="text-center">
            <Link style={linkStyle}>
              <div>
                Don't have an account?<span className="color-1f0">Signup</span>{" "}
                here
              </div>
            </Link>
            <Link style={linkStyle} to="/logincs">
              <div>
                Customer Service <span className="color-1f0">Log in</span> here
              </div>
            </Link>
            <Link to="/loginspv" style={linkStyle}>
              <div>
                Supervisor <span className="color-1f0">Log in</span> here
              </div>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default login_Customer;
