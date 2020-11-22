import React from "react";
import {Button, Table} from "react-bootstrap";
import NavbarSpv from "./NavbarSpv"

function Dashboard_Spv() {
    return (
        <div className="">
            <NavbarSpv/>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>
            <Table>
                <thead>
                <tr>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Ticket Id</th>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Title</th>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Status</th>
                            {/* <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Rating</th> */}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>mm/dd/yy 00.00.00</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>#123123</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>ATM saya ketelen anak</td>
                    <td style={{ textAlign: "center", border: "solid 10px white" }}>complicated</td>
                            {/* <td style={{ textAlign: "center", border: "solid 10px white" }}>**</td> */}
                </tr>
                </tbody>
            </Table>

            <div className="d-flex justify-content-end">
                <Button variant="outline-primary" className="btn-large" size="lg" disabled>Previous</Button>
                <Button variant="outline-primary" size="lg" className="btn-large" disabled>Next</Button>
            </div>
        </div>
    );
}

export default Dashboard_Spv;
