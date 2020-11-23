import React from "react";
import {Button, Table} from "react-bootstrap";
import NavbarSpv from "./NavbarSpv"
import TicketListSpv from "./TicketListSpv"

function Dashboard_Spv() {
    return (
        <div className="">
            <NavbarSpv/>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>
            <TicketListSpv/>
        </div>
    );
}

export default Dashboard_Spv;
