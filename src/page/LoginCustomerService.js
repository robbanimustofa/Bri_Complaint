import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const LoginCustomerService = ({ history }) => {
  const linkStyle = {
    color: "black",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      history.push("/dashboardcs");
    }
  }, [history, token]);

  const loginHandle = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    axios.post("https://3671b2ca5014.ngrok.io/api/cs/login", loginData)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', JSON.stringify(res.data.token));
          history.push("/dashboardcs")
        } else {
          alert(res.data.status)
        }
      }, [history])
      .catch(err => {
        console.log(err)
        alert("Missing password");
      })
  }
  return (
    <div>
      {/* navigation */}
      <div>
        <div className="font-57 font-goldman color-394">BRI Complaint | CS</div>
      </div>

      {/* Main */}
      <div className="d-flex centering-content">
        <div className="container-login m-t-60">
          {/*<div className="text-center">Login Customer Service (CS)</div>*/}
          <Form className="m-t-30">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password" />
            </Form.Group>

            <Link to='/forgotpass'>
              <div>Forgot Password?</div>
            </Link>

            <div className="text-center m-t-35 m-b-35">
              <Link to="/dashboardcs" style={linkStyle} onClick={loginHandle}>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                  Login
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <Link to='/' style={linkStyle}>
                <div>
                  Customer <span className="color-1f0">Login</span> here
              </div>
              </Link>

              <Link to='/loginspv' style={linkStyle}>
                <div>
                  Supervisor <span className="color-1f0">Login</span> here
              </div>
              </Link>

            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

function showalertsuccess() {
  alert("Anda Berhasil Login!!");
}

export default LoginCustomerService;
