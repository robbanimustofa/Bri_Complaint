import React from 'react'
import { Table } from "react-bootstrap";

const MyTicketCS = () => {
    return (
        <div>
            <div className="container">
                <Table>
                    <thead>
                    <tr>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Ticket Id</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Title</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ textAlign: "center", border: "solid 10px white" }}>mm/dd/yy 00.00.00</td>
                        <td style={{ textAlign: "center", border: "solid 10px white" }}>#123123</td>
                        <td style={{ textAlign: "center", border: "solid 10px white" }}>ATM saya ketelen anak</td>
                        <td style={{ textAlign: "center", border: "solid 10px white" }}>complicated</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MyTicketCS;
