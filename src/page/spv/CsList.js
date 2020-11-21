import React, {Component} from 'react'
import NavbarSpv from './NavbarSpv'
import {Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom"

class CsList extends Component {
    linkStyle = {
        color: "black",
    };
    render() {
        return(
            <div>
                <NavbarSpv />
                <div>
                    <Link to='/addcsaccount' style={this.linkStyle}>
                        <Button variant="primary" size="lg" className="btn-large button-color-394">
                            Add CS
                        </Button>
                    </Link>
                </div>
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
