import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import Navbar from './Navbar';

class TicketListCs extends Component {
    render() {
        return(
            <div style={{margin:"50px"}}>
                <Navbar/>
                <button className="btn btn-primary">Create New Ticket</button>
                <Table>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Ticket Id</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Title</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Status</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>mm/dd/yy 00.00.00</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>#123123</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>ATM saya ketelen anak</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>complicated</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>******</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TicketListCs;