import React, { Component } from 'react'
import { Table } from "react-bootstrap";

class TicketsCustomer extends Component {

    render() {
        const { tickets, loading } = this.props

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

export default TicketsCustomer