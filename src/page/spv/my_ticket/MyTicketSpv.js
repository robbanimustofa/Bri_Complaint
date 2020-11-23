import React from 'react'
import NavbarSpv from "../NavbarSpv"
import MyTicketGetApiSpv from './MyTicketGetApiSpv';

const MyTicketSpv = () => {
    return (
        <div>
            <NavbarSpv />
            <div>
               <MyTicketGetApiSpv />
            </div>
        </div>
    )
}

export default MyTicketSpv;
