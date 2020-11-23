import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";

const AddCSAccount = ({ history }) => {
  const linkStyle = {
    color: "black",
  };

  const [name, setName] = useState("");
  const [pseudonym, setPseudonym] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("/photo/rani.jpg");

  const addCSHandler = (e) => {
    e.preventDefault();
    const addData = {
      name: name,
      pub_name: pseudonym,
      email: email,
      password: password,
      photo: file,
      pub_photo: file
    };
    axios.post("https://3671b2ca5014.ngrok.io/api/spv/add-cs", addData, {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem('token'))
      }
    })
      .then(res => {
        // localStorage.setItem('token', JSON.stringify(res.data.token));
        if (res.status === 200) {
          alert("Berhasil menambahkan CS")
          history.push("/cslist")
        } else {
          alert(res.data.status)
        } console.log(res.data);

      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <div>
      <div className="font-57 font-goldman color-394">BRI Complaint | SPV</div>
      <div className="d-flex centering-content m-t-60">
        <div className="signup">
          <Form className="form-retno">
            <Form.Row className="form-row">
              <Form.Group controlId="name" className="form-group form-group-retno">
                <Form.Label>Nama Asli</Form.Label>
                <Form.Control
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Nama Asli"
                />
              </Form.Group>
              <Form.Group controlId="email" className="form-group form-group-retno">
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
            </Form.Row>
            <Form.Row className="form-row">
              <Form.Group controlId="pseudonym" className="form-group form-group-retno">
                <Form.Label>Nama Samaran</Form.Label>
                <Form.Control
                  value={pseudonym}
                  required
                  onChange={(e) => setPseudonym(e.target.value)}
                  type="text"
                  name="pseudonym"
                  placeholder="Nama Samaran"
                />
              </Form.Group>
              <Form.Group controlId="foto" className="form-group form-group-retno">
                <Form.File id="formcheck-api-regular">
                  <Form.File.Label>Foto</Form.File.Label>
                  <Form.File.Input />
                </Form.File>
              </Form.Group>
            </Form.Row>
            <Form.Row className="form-row">
              <Form.Group controlId="password" className="form-group form-group-retno">
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link style={linkStyle} to='/cslist'>
                <Button className="justify-content-end btn-danger btn-md" variant="primary" type="submit">
                  Cancel
                </Button>
              </Link>

              <Button className="justify-content-end btn-primary btn-md" variant="primary" onClick={addCSHandler}>
                Add
                </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddCSAccount;