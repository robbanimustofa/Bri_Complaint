import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const linkStyle = {
    color: "black",
  };
  return (
    <div>
      {/* navigation */}
      <div>
        <div className="font-57 font-goldman color-394">BRI Complaint</div>
      </div>

      {/* Main */}
      <div className="d-flex centering-content">
        <div className="container-login m-t-60">
          <div className="text-center">Forgot Password</div>
          <Form className="m-t-30">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <div className="text-center m-t-35 m-b-35">
              <Link to="/" style={linkStyle}>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                  Submit
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
