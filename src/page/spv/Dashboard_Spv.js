import React from "react";
import {Button, Table} from "react-bootstrap";
import NavbarSpv from "./NavbarSpv"
import TicketList from './TicketList'

function Dashboard_Spv() {
    return (
        <div className="">
            <NavbarSpv/>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>
            <TicketList />
        </div>
    );
}

export default Dashboard_Spv;
