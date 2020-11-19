import React, { Component } from 'react';
import Navbar from './Navbar'
import { Form, Button } from 'react-bootstrap'

class InitTicket extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Komplain Pelayanan</option>
                            <option>Pembukaan Rekening</option>
                            <option>Internet Banking</option>
                            <option>Mobile Banking</option>
                            <option>Others</option>
                        </Form.Control>
                    </Form.Group>
                   
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Detail issue</Form.Label>
                        <Form.Control as="textarea" rows={3} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Screenshot</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>URL (optional)</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                        <Button className="justify-content-end btn-danger" variant="primary" type="submit">
                            Cancel
                        </Button>

                        <Button className="justify-content-end btn-success" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default InitTicket;