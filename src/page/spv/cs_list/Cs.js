import React, { Component } from 'react'
import { Table } from "react-bootstrap";

class Cs extends Component {

    render() {
        const { tickets, loading } = this.props

        if (loading) {
            return <h2>Loading...</h2>
        }

        const ticketList = tickets && tickets.map((ticket, index) => {
            return (
                <tr key={index}>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.personal_id}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.name}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.pub_name}</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.final_rating}</td>
                </tr>
            )
        })

        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>CS Id</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Name</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Alias Name</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Overall Rating</th>
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

export default Cs