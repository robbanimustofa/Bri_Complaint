import React from 'react'
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import {withRouter} from "react-router-dom";

const Cs = ({history, tickets, loading}) => {

    const handleDelete = (id) => {
        axios.delete(`http://107.20.76.132:8001/api/spv/cs-delete/${id}`, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })
            .then(res => {
                alert(res.data.message)
                window.location.reload(false)
            })
    }

    const handleClick = (id) => {
        history.push(`/detailcs${id}`)
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    const ticketList = tickets && tickets.map((ticket, index) => {
        return (
            <tr key={index} onClick={() => { handleClick(ticket._id) }}>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.personal_id}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.name}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.pub_name}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.final_rating}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>
                    <Button className="btn btn-danger" onClick={() => { handleDelete(ticket._id) }}>
                        Delete
                        </Button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <Table className="table-hover">
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
