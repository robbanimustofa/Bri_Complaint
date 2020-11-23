import React from 'react'
import NavbarCustomerService from "../NavbarCustomerService"
import MyTicketGetApiCs from './MyTicketGetApiCs';

const MyTicketCS = () => {
    return (
        <div>
            <NavbarCustomerService/>
            <div>
                <MyTicketGetApiCs />
            </div>
        </div>
    )
}

export default MyTicketCS;