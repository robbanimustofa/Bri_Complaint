import React from 'react'
import { Table } from "react-bootstrap";
import { withRouter } from 'react-router-dom'
// import ReplyFormCs from './ReplyFormCs'

const TicketDoneTableCustomer = ({history, tickets, loading}) => {


    const handleClick = (id) => {
        history.push(`/replyformCs${id}`)
    }


    // useEffect(() => {
    //     history.push("/replyformcs")
    // }, [history])

    if (loading) {
        return <h2>Loading...</h2>
    }

    const ticketList = tickets && tickets.map((ticket, index) => {
        return (
            <tr key={index} onClick={() => { handleClick(ticket._id) }}>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.createdAt}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.ticket_id}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.complaint_name}</td>
                <td style={{ textAlign: "center", border: "solid 10px white" }}>{ticket.tag}</td>
            </tr>
        )
    })

    return (
        <div>
            <Table className="table-hover" style={{cursor:"pointer"}}>
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

export default withRouter(TicketDoneTableCustomer)
