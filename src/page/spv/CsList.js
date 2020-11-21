import React, {Component} from 'react'
import NavbarSpv from './NavbarSpv'
import { Table } from "react-bootstrap";

class CsList extends Component {
    render() {
        return(
            <div>
                <NavbarSpv />
                <Table>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>CS ID</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Name</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Alias Name</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Ticket Closed</th>
                            <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Overall Rating</th>
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
        )
    }
}

export default CsList 