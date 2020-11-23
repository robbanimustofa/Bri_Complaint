import React from 'react'
import { Link } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";


const NavbarCustomerService = () => {
    const logoutHandle = () => {
        localStorage.removeItem('token');
    }
    return(
        <Navbar collapseOnSelect expand="lg" className='remove-padding-lr'>
        <Navbar.Brand className="font-goldman font-24 remove-m-lr">BRI Complaint | CS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='text-right'>
        <Nav className="mr-auto">

        </Nav>
    <Nav>
        {/*<Link to="/dashboardspv" style={linkStyle} onClick={test1}>*/}
        <Nav.Link  className='font-weight-bold' href='/dashboardcs' style={{color:'black'}}>Ticket List</Nav.Link>
        {/*</Link>*/}

        {/*<Link to="/myticketspv" style={linkStyle} onClick={test1}>*/}
        <Nav.Link className='font-weight-bold' href='/myticketcs' style={{color:'black'}}>My Tickets</Nav.Link>
        {/*</Link>*/}
        {/*    <Link to="/loginspv" style={linkStyle} onClick={test1}>*/}
        <Nav.Link onClick={logoutHandle} href='/logincs' className='font-weight-bold' style={{color:'red'}}>Logout</Nav.Link>
        {/*</Link>*/}
    </Nav>
    </Navbar.Collapse>
</Navbar>
    )
};

export default NavbarCustomerService;
