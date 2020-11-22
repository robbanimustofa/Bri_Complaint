import React from "react";
import { Button } from "react-bootstrap";
import NavbarCustomerService from "./NavbarCustomerService"
import TicketList from './TicketList'

function DashboardCustomerService() {
    return (
        <div className="">
            <NavbarCustomerService/>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>
            <TicketList />
        </div>
    );
}

export default DashboardCustomerService;
