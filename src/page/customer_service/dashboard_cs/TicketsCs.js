import React, { useState } from 'react';
import { Button, Table } from "react-bootstrap";
import axios from "axios";

const TicketsCs = ({ tickets, loading }) => {

    const [ticket, setTicket] = useState(null)

    const handleGetRandom = async (id) => {
        const ApiURL = `http://107.20.76.132:8001/api/cs/tickets/ticket_id/get-ticket?ticket_id=${id}`
        const response = await axios.put(ApiURL, ticket, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })

        setTicket(response.data)
        window.location.reload(false)
    }


    if (loading) {
        return <h2>Loading...</h2>
    }

    const ticketList = tickets && tickets.map((ticket, index) => {
        return (
            <tr key={index}>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.createdAt}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.ticket_id}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.complaint_name}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.tag}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>
                    <Button className="btn button-color-394" onClick={() => { handleGetRandom(ticket._id) }}>
                        GET TICKET
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

export default TicketsCs