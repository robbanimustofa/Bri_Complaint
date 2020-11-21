import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'

class replyForm extends Component {
    render() {
        return (
            <div className="center" style={{ margin: "50px 50px 75px 50px" }}>
                <Table>
                    <tbody >
                        <tr className="row mb-5">
                            <td className="col-sm-3">Title</td>
                            <td className="col-sm-1">:</td>
                            <td className="col-sm-8 bg-light">Card Declined</td>
                        </tr>
                        <tr className="row mb-5">
                            <td className="col-sm-3">Category</td>
                            <td className="col-sm-1">:</td>
                            <td className="col-sm-8 bg-light">Internet Banking</td>
                        </tr>
                        <tr className="row mb-5">
                            <td className="col-sm-3">Detail issue</td>
                            <td className="col-sm-1">:</td>
                            <td className="col-sm-8 bg-light text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus explicabo odio dolor dolore sapiente quod obcaecati commodi molestiae placeat quis iusto ipsa excepturi voluptatum a, voluptate sed porro! Dolorem, ab</td>
                        </tr>
                        <tr className="row mb-5">
                            <td className="col-sm-3">Screenshot</td>
                            <td className="col-sm-1">:</td>
                            <td className="col-sm-8 bg-light"><a href="#">problem.jpg</a></td>
                        </tr>
                        <tr className="row mb-5">
                            <td className="col-sm-3">URL Video</td>
                            <td className="col-sm-1">:</td>
                            <td className="col-sm-8 bg-light">www.google.com</td>
                        </tr>
                    </tbody>
                </Table>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Reply</Form.Label>
                        <Form.Control as="textarea" rows={3} required />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
                        <div>
                            <Button className="justify-content-end btn-danger" variant="primary" type="submit">
                                Cancel
                            </Button>

                            <Button className="justify-content-end btn-success" variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}

export default replyForm