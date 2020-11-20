import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddCSAccount = () => {
  const [name, setName] = useState("");
  const [pseudonym, setPseudonym] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const addCSHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="signup">
        <Form className="form">
          <Form.Row className="form-row">
            <Form.Group controlId="name" className="form-group">
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
            <Form.Group controlId="email" className="form-group">
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
            <Form.Group controlId="pseudonym" className="form-group">
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
            <Form.Group controlId="foto" className="form-group">
              <Form.Label>Foto</Form.Label>
              <input
                type="file"
                name="myImage"
                onChange={(e) => setFile(e.target.value)}
              />
              {/* <Form.Control
                                value={noRek}
                                required
                                onChange={(e) => setNoRek(e.target.value)}
                                type="text"
                                name="norek"
                                placeholder="No. Rekening" /> */}
            </Form.Group>
          </Form.Row>
          <Form.Row className="form-row">
            <Form.Group controlId="password" className="form-group">
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
          <Button className="btn" onClick={addCSHandler}>
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCSAccount;
