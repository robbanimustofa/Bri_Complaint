import React from 'react'
import TicketDoneGetApiCustomer from './TicketDoneGetApiCustomer';
import NavbarCustomer from "../NavbarCustomer";

const TicketDoneCustomer = () => {
    return (
        <div>
            <NavbarCustomer/>
            <div>
                <TicketDoneGetApiCustomer />
            </div>
        </div>
    )
}

export default TicketDoneCustomer;
