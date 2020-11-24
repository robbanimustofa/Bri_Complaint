import React, { useState } from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import CustomerService from "./png-cs.png";
// import ModalTest from './ModalTest'
import axios from "axios";

const TicketsCustomer = ({ tickets, loading }) => {

    const [ticket, setTicket] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClosed = async (id) => {
        const ApiURL = `http://107.20.76.132:8001/api/customer/tickets/ticket_id/close?ticket_id=${id}`
        const response = await axios.put(ApiURL, ticket, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        });
        if(response.status===200){
            handleShow();
        }



        console.log(response.data);
        setTicket(response.data)
    }


    const testmodal = () =>{
        handleClose();
        window.location.reload(false);
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

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
                <td style={{ textAlign: "center", border: "solid 10px white" }}>
                    <Button className="btn btn-danger" onClick={() => { handleClosed(ticket._id) }}>
                        CLOSED
                    </Button>
                    {/*<Button className="btn btn-danger" onClick={testmodal}>*/}
                    {/*    CLOSED*/}
                    {/*</Button>*/}
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
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ratting Customer Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <img style={{width:'150px'}} src={CustomerService} alt=""/>
                    </div>
                    <div style={{padding:"0px 170px"}}>
                        <div>Name : Maulani </div>
                        <div>Id : 2343645 </div>
                    </div>
                    <div className='text-center'>Rate Me</div>
                    <div style={{margin:'0px 180px'}}>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={testmodal}>
                        Ratting
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default TicketsCustomer
