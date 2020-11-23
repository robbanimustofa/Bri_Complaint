import React, { Component } from 'react'
import { Table } from "react-bootstrap";

class TicketsSpv extends Component {

    render() {
        const { TicketSpv, loading } = this.props

        if (loading) {
            return <h2>Loading...</h2>
        }

        const ticketList = TicketSpv && TicketSpv.map((ticket, index) => {
            return (
                <tr key={index}>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.createdAt}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.ticket_id}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.complaint_name}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.tag}</td>
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
                        </tr>
                    </thead>
                    <tbody>
                        {ticketList}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TicketsSpv