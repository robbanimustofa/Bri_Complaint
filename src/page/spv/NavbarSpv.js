import React from 'react'
import { Button, Navbar, Nav } from "react-bootstrap";
import $ from 'jquery'
import { findDOMNode } from 'react-dom'
// import { Link } from "react-router-dom";


const NavbarSpv = ({refs}) => {
    const linkStyle = {
        color: "black",
    };

    const logoutHandle = () => {
        localStorage.removeItem('token');
    }

    // const activeLink=() =>{
    //     const test = findDOMNode({refs}.test1);
    //     $(test).addClass('active')
    // }
    return (
        <Navbar collapseOnSelect expand="lg" className='remove-padding-lr'>
            <Navbar.Brand className="font-goldman font-24 remove-m-lr">BRI Complaint | SPV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='text-right'>
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    {/*<Link to="/dashboardspv" style={linkStyle} onClick={test1}>*/}
                        <Nav.Link  className='font-weight-bold' href='/dashboardspv' style={{color:'black'}}>Ticket List</Nav.Link>
                    {/*</Link>*/}

                    {/*<Link to="/myticketspv" style={linkStyle} onClick={test1}>*/}
                        <Nav.Link className='font-weight-bold' href='/myticketspv' style={{color:'black'}}>My Tickets</Nav.Link>
                                        {/*</Link>*/}
                    {/*<Link to="/cslist" style={linkStyle} onClick={test1}>*/}
                        <Nav.Link href='cslist' className='font-weight-bold' style={{color:'black'}}>CS List</Nav.Link>
                {/*</Link>*/}
                {/*    <Link to="/loginspv" style={linkStyle} onClick={test1}>*/}
                        <Nav.Link onClick={logoutHandle} href='/loginspv' className='font-weight-bold' style={{color:'red'}}>Logout</Nav.Link>
                                        {/*</Link>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

function test1() {
    alert("Anda");
}

export default NavbarSpv;
