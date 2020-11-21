import React from "react";
import { Button, Table } from "react-bootstrap";
import NavbarSpv from "./NavbarSpv";

const DetailCS = () => {
    return (
        <div>
            <NavbarSpv/>
            <div>
                <div style={{margin: 10}}>
                    <h4>Nama :</h4>
                    <h4>Alias Name :</h4>
                    <h4>Overall Rating :</h4>
                </div>
            <Table>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Ticket Id</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Customer Id</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Title</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white"}}>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>#123123</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>#CUST_001</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>ATM saya ketelen anak</td>
                            <td style={{ textAlign: "center", border: "solid 10px white" }}>*****</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end">
                <Button variant="outline-primary" className="btn-large" size="lg" disabled>Previous</Button>
                <Button variant="outline-primary" size="lg" className="btn-large" disabled>Next</Button>
            </div>
            </div>
        </div>
    )
}

export default DetailCS