import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import NavbarCustomer from './NavbarCustomer';

class DashboardCustomer extends Component {
     linkStyle = {
        color: "black",
    };
    render() {
        return(
            <div>
                <NavbarCustomer/>
                <Link style={this.linkStyle} to='/createticket'>
                    <button className="btn btn-primary">Create New Ticket</button>
                </Link>

                <Table>
                    <thead>
                    <tr>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Ticket Id</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Title</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Status</th>
                        <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Rating</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>

            </div>
        );
    }
}

export default DashboardCustomer;
