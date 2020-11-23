import React from "react";
import { Button } from "react-bootstrap";
import NavbarCustomerService from "../NavbarCustomerService"
import TicketListCs from './TicketListCs'

function DashboardCs() {
    return (
        <div className="">
            <NavbarCustomerService />
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>
            <TicketListCs />
        </div>
    );
}

export default DashboardCs;
