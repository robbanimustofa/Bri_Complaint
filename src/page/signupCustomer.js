import React, { useState } from 'react';
import { Alert, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupCustomer = () => {
    const [name, setName] = useState("");
    const [nik, setNIK] = useState("");
    const [noRek, setNoRek] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (name !== '' || nik !== '' || noRek !== '' || email !== '' || password !== '') {
            setShow(true);
        }
    };

    return (
        <div className="container">
            {show === true ?
                <Alert variant="success" onClose={() => setShow(false)} dismissible>Check your email for verification!
            </Alert> : <div />}
            <div className="signup">
                <Form className="form" >
                    <Form.Row className="form-row">
                        <Form.Group controlId="name" className="form-group">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                placeholder="Nama Lengkap" />
                        </Form.Group>
                        <Form.Group controlId="nik" className="form-group">
                            <Form.Label>No. KTP</Form.Label>
                            <Form.Control
                                value={nik}
                                required
                                onChange={(e) => setNIK(e.target.value)}
                                type="text"
                                name="nik"
                                placeholder="No. KTP" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Form.Group controlId="email" className="form-group">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="norek" className="form-group">
                            <Form.Label>No. Rekening</Form.Label>
                            <Form.Control
                                value={noRek}
                                required
                                onChange={(e) => setNoRek(e.target.value)}
                                type="text"
                                name="norek"
                                placeholder="No. Rekening" />
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
                                placeholder="Password" />
                        </Form.Group>
                    </Form.Row>
                    <Button className="btn" onClick={submitHandler}>
                        Sign Up
                    </Button><p>Already have an account? <span><a href="login" target="_blank">Login here</a></span></p>
                </Form>
            </div>
        </div>

    )
}

export default SignupCustomer;