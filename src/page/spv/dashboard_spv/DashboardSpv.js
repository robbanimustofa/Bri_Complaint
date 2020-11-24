import React from "react";
import {Button} from "react-bootstrap";
import NavbarSpv from "../NavbarSpv"
import TicketListSpv from './TicketListSpv'

function DashboardSpv() {
    return (
        <div className="">
            <NavbarSpv/>
            <TicketListSpv />
        </div>
    );
}

export default DashboardSpv;
