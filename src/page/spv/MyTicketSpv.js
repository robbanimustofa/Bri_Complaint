import React from 'react'
import { Button, Table } from "react-bootstrap";
import NavbarSpv from "./NavbarSpv"

const MyTicketSpv = () => {
    return (
        <div>
            <NavbarSpv />
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
                        <tr>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>mm/dd/yy 00.00.00</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>#123123</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>ATM saya ketelen anak</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>complicated</td>
                        </tr>
                    </tbody>
                </Table>
                {/*<div className="d-flex justify-content-end">*/}
                {/*    <Button variant="outline-primary" className="btn-large" size="lg" disabled>Previous</Button>*/}
                {/*    <Button variant="outline-primary" size="lg" className="btn-large" disabled>Next</Button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default MyTicketSpv;
