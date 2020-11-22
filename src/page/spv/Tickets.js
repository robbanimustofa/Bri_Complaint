import React, { Component } from 'react'
import { Table } from "react-bootstrap";

class Tickets extends Component {

    render() {
        const { tickets, loading } = this.props

        if (loading) {
            return <h2>Loading...</h2>
        }

        const ticketList = tickets && tickets.map((ticket, index) => {
            const date = "00/00/00 00-00-00"
            return (
                <tr key={index}>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{date}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.id}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.title}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.completed}</td>
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

export default Tickets