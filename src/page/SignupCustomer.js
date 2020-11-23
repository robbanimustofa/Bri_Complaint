import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupCustomer = () => {
  const [name, setName] = useState("");
  const [nik, setNIK] = useState("");
  const [noRek, setNoRek] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const signupData = {
      name: name,
      no_ktp: nik,
      account_number: noRek,
      email: email,
      password: password,
    };
    axios.post("https://785e40a7b3e4.ngrok.io/api/customer/signup", signupData)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          alert("Check your email for verification!")
        } else {
          alert(res.data.status)
        }
        // localStorage.setItem('token', JSON.stringify(res.data.token));

        // history.push("/dashboardcustomer")
      })
      .catch(err => {
        console.log(err)
        setShowDanger(true);
      })
  };

  const linkStyle = {
    color: "black",
  };

  return (
    <div className="">
      <div className="font-57 font-goldman color-394">BRI Complaint</div>
      {
        showDanger === true ? (
          <Alert variant="danger" className="animated fadeInDown" onClose={() => setShowDanger(false)} dismissible>
            Kamu salahh hahahha
          </Alert>
        ) : (
            <div />
          )
      }
      {/* {showDanger === true ? (
          <div role="alert" className='alert alert-danger animated fadeInDown' onClose={() => setShowDanger(false)} dismissible={'true'}>
            Kamu M Salah!
          </div>
      ):(
          <div />
      )} */}
      {
        show === true ? (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            Check your email for verification!
          </Alert>
        ) : (
            <div />
          )
      }
      <div className="d-flex centering-content m-t-60">
        <div className="signup">
          <Form className="form-retno">
            <Form.Row className="form-row">
              <Form.Group
                controlId="name"
                className="form-group form-group-retno"
              >
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                />
              </Form.Group>
              <Form.Group
                controlId="nik"
                className="form-group form-group-retno"
              >
                <Form.Label>No. KTP</Form.Label>
                <Form.Control
                  value={nik}
                  required
                  onChange={(e) => setNIK(e.target.value)}
                  type="text"
                  name="nik"
                  placeholder="No. KTP"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="form-row">
              <Form.Group
                controlId="email"
                className="form-group form-group-retno"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group
                controlId="norek"
                className="form-group form-group-retno"
              >
                <Form.Label>No. Rekening</Form.Label>
                <Form.Control
                  value={noRek}
                  required
                  onChange={(e) => setNoRek(e.target.value)}
                  type="text"
                  name="norek"
                  placeholder="No. Rekening"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="form-row">
              <Form.Group
                controlId="password"
                className="form-group form-group-retno"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>
            <Button className="btn button-color-394" onClick={submitHandler}>
              Sign Up
            </Button>
            <div className="text-center">
              <Link to="/" style={linkStyle}>
                <div>Already have an account?<span className="color-1f0"> Login here</span></div>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div >
  );
};

export default SignupCustomer;