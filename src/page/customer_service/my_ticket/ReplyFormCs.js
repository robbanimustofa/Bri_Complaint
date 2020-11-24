import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { Link, useParams, withRouter } from "react-router-dom";

const ReplyFormCs = ({history}) => {
    
    const { id } = useParams()

    const [ticket, setTicket] = useState(null)
    const [reply, setReply] = useState("")

    const fetchData = async () => {
        const ApiURL = `http://107.20.76.132:8001/api/cs/tickets/ticket_id/get-ticket?ticket_id=${id}`
        const response = await axios.put(ApiURL, ticket, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })
        
        console.log(response.data)
        setTicket(response.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            reply: reply
        }

        const ApiURL = `http://107.20.76.132:8001/api/cs/tickets/${id}/reply`
        const response = await axios.put(ApiURL, data, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })

        setReply(response.data)
        history.push('./myticketcs')
    }

    const handleEscalated = async (id) => {
        const ApiURL = `http://107.20.76.132:8001/api/cs/tickets/ticket_id/update-tag?ticket_id=${id}&tag=escalated`
        const response = await axios.put(ApiURL, ticket, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })

        setTicket(response.data)
        history.push('/myticketcs')
    }

    useEffect(() => {
        fetchData()
    }, [id])
    
    
    
    return(

        <div className="center" style={{margin:"50px 50px 75px 50px"}}>
            <Table>
                <tbody >
                    <tr className="row mb-5">
                        <td className="col-sm-3">Title</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light">{ticket && ticket.complaint_name}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">Category</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light">{ticket && ticket.category.name}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">Detail issue</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light text-justify">{ticket && ticket.description}</td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">Screenshot</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light"><a target="_blank" href={ticket && ticket.screenshot}>{ticket && ticket.screenshot}</a></td>
                    </tr>
                    <tr className="row mb-5">
                        <td className="col-sm-3">URL Video</td>
                        <td className="col-sm-1">:</td>
                        <td className="col-sm-8 bg-light"><a target="blank" href={ticket && ticket.url_video}>{ticket && ticket.url_video}</a></td>
                    </tr>
                </tbody>
            </Table>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reply</Form.Label>
                    <Form.Control onChange={(e) => setReply(e.target.value)} as="textarea" rows={3} required />
                </Form.Group>

                <div className="d-flex justify-content-between">
                    <div>
                        <Button onClick={()=> {handleEscalated(ticket._id)}} className="justify-content-end btn-warning" variant="primary" type="submit">
                            Escalated
                        </Button>
                    </div>
                    <div>
                        <Link to="/myticketcs">
                            <Button className="justify-content-end btn-danger" variant="primary" type="submit">
                                Cancel
                            </Button>
                        </Link>

                        <Button onClick={handleSubmit} className="justify-content-end btn-success" variant="primary" type="submit">
                            Submit
                        </Button>
                    </div> 
                </div>
            </Form>
        </div>
    )
    
}

export default withRouter(ReplyFormCs)