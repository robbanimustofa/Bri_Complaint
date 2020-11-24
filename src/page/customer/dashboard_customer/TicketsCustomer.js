import React, { useState } from 'react';
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const TicketsCustomer = ({ tickets, loading }) => {

    const [ticket, setTicket] = useState(null)

    const handleClosed = async (id) => {
        const ApiURL = `https://17c2d6188906.ngrok.io/api/customer/tickets/ticket_id/close?ticket_id=${id}`
        const response = await axios.put(ApiURL, ticket, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })

        setTicket(response.data)
        window.location.reload(false)
    }

    // console.log(ticket);

    if (loading) {
        return <h2>Loading...</h2>
    }

    const ticketList = tickets && tickets.map((ticket, index) => {
        return (
            <tr key={index}>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.createdAt}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.ticket_id}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.complaint_name}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}><span>{ticket.tag}</span><span>----</span><span>{ticket.assigned_to}</span></td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.reply}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>
                    <Button className="btn btn-danger" onClick={() => { handleClosed(ticket._id) }}>
                        CLOSED
                        </Button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Ticket Id</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Title</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Status</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Reply</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketList}
                </tbody>
            </Table>
        </div>
    )

}

export default TicketsCustomer