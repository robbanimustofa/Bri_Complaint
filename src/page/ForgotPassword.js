import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = ({history}) => {
  const linkStyle = {
    color: "black",
  };

  const [email, setEmail] = useState("");

  const forgotHandle = (e) => {
    e.preventDefault();
    const forgotData = {
      email: email,
    };
    axios.post("http://107.20.76.132:8001/api/customer/forgot-password", forgotData)
        .then(res => {
          if (res.status === 200) {
            alert("Check your email for verification!")
            history.push("/")
          } else {
            alert(res.data.status)
          }
        })
        .catch(err => {
          console.log(err)
        }, [history])
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
                <Form.Control
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Enter email" />
              </Form.Group>
              <div className="text-center m-t-35 m-b-35">
                <Link to="/" style={linkStyle}>
                  <Button variant="primary" size="lg" className="btn-large btn-danger">
                    Cancel
                  </Button>
                </Link>
                <Button variant="primary" size="lg" className="btn-large button-color-394" onClick={forgotHandle}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
  )
}

export default ForgotPassword
