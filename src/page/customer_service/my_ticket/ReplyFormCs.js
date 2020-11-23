import axios from 'axios';
import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { Link, useParams } from "react-router-dom";

const ReplyFormCs = () => {
    
    const { id } = useParams()

    const fetchData = async () => {
        const ApiURL = `https://785e40a7b3e4.ngrok.io/api/cs/tickets/ticket_id/get-ticket?ticket_id=${id}`
        const response = await axios.put(ApiURL, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })

        return response.data
    }

    // const handleEscalate = async () => {
    //     const response = await axios.put(`https://785e40a7b3e4.ngrok.io/api/cs/tickets/ticket_id/update-tag?ticket_id=${id}&tag=escalated`)
    //     return response.data
    // }

    const ticket = fetchData()
    
    return(

        <div className="center" style={{margin:"50px 50px 75px 50px"}}>
            <Table>
                <tbody >
                    <tr className="row mb-5">
                        <td className="col-sm-3">Title</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light">{ticket.complaint_name}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">Category</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light">{}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">Detail issue</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light text-justify">{ticket.description}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">Screenshot</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light">{ticket.screenshot}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">URL Video</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light">{ticket.url_video}</td>
                    </tr>
                </tbody>
            </Table>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reply</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>

                <div className="d-flex justify-content-between">
                    <div>
                        <Button className="justify-content-end btn-warning" variant="primary" type="submit">
                            Escalated
                        </Button>
                    </div>
                    <div>
                        <Link to="/myticketcs">
                            <Button className="justify-content-end btn-danger" variant="primary" type="submit">
                                Cancel
                            </Button>
                        </Link>

                        <Button className="justify-content-end btn-success" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div> 
                </div>
            </Form>
        </div>
    )
    
}

export default ReplyFormCs