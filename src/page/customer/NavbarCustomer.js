import React from 'react'
import {Nav, Navbar} from "react-bootstrap";
// import {Link} from "react-router-dom"

const NavbarCustomer = () => {
    const logoutHandle = () => {
        localStorage.removeItem('token');
    }
    return(
        <Navbar collapseOnSelect expand="lg" className='remove-padding-lr'>
            <Navbar.Brand className="font-goldman font-24 remove-m-lr">BRI Complaint</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='text-right'>
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link  href='/ticketdone' className='font-weight-bold' style={{color:'black'}}>Tickets Done</Nav.Link>
                    <Nav.Link  href='/dashboardcustomer' className='font-weight-bold' style={{color:'black'}}>Tickets Undone</Nav.Link>
                    {/*    <Link to="/loginspv" style={linkStyle} onClick={test1}>*/}
                    <Nav.Link onClick={logoutHandle} href='/' className='font-weight-bold' style={{color:'red'}}>Logout</Nav.Link>
                    {/*</Link>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarCustomer;
