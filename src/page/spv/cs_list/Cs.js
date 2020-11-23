import React from 'react'
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Cs = ({history, tickets, loading}) => {

    const handleClick = (id) => {
        axios.delete(`https://785e40a7b3e4.ngrok.io/api/spv/cs-delete/${id}`, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })
            .then(res => {
                alert(res.data.message)
                window.location.reload(false)
            })
    }

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
                <td style={{ textAlign: "center", border: "solid 10px white" }}>
                    <Button className="btn btn-danger" onClick={() => { handleClick(ticket._id) }}>
                        Delete
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
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>CS Id</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Name</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Alias Name</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Overall Rating</th>
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

export default withRouter(Cs);