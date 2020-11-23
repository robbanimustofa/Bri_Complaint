import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import NavbarCustomer from '../NavbarCustomer';
import TicketListCustomer from './TicketListCustomer'

class DashboardCustomer extends Component {
     linkStyle = {
        color: "black",
    };
    render() {
        return(
            <div style={{margin:"50px"}}>
                <NavbarCustomer/>
                <Link style={this.linkStyle} to='/createticket'>
                    <button className="btn btn-primary">Create New Ticket</button>
                </Link>
                <TicketListCustomer />
            </div>
        );
    }
}

export default DashboardCustomer;
