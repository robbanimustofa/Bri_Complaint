import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const LoginSupervisor = ({ history }) => {
  const linkStyle = {
    color: "black",
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      history.push('/dashboardspv');
    }
  }, [history, token]);

  const loginHandle = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    axios.post("https://f4d7eb9f0cc9.ngrok.io/api/spv/login", loginData)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', JSON.stringify(res.data.token));
          history.push("/dashboardspv")
        } else {
          alert(res.data.status)
        }
      }, [history])
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {/* navigation */}
      <div>
        <div className="font-57 font-goldman color-394">BRI Complaint | SPV</div>
      </div>

      {/* Main */}
      <div className="d-flex centering-content">
        <div className="container-login m-t-60">
          {/*<div className="text-center">Login SPV Customer Service (CS)</div>*/}
          <Form className="m-t-30">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Link to='/forgotpass'>
              <div>Forgot Password?</div>
            </Link>
            <div className="text-center m-t-35 m-b-35">
              <Link to="/dashboardspv" style={linkStyle}>
                <Button variant="primary" size="lg" className="btn-large button-color-394" onClick={loginHandle}>
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

export default LoginSupervisor;
