import React from 'react'
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const NavbarSpv = () => {
    const linkStyle = {
        color: "black",
    };

    const logOut = () => {
        localStorage.removeItem('token');
    }

    return (
        <div className="navbar d-flex justify-content-between">
            <div className="">
                <h1 className="navbar-brand font-goldman font-57">BRI Complaint | SPV</h1>
            </div>
            <div id={'button_nav'}>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink activeStyle={{color:'grey'}} to="/dashboardspv" style={linkStyle} onClick={test1}>
                            <Button variant="primary" size="md" className="btn-md">
                                Ticket List
                            </Button>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <Link to="/myticketspv" style={linkStyle} onClick={test1}>
                            <Button variant="primary" size="md" className="btn-md">
                                My Ticket
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cslist" style={linkStyle} onClick={test1}>
                            <Button variant="primary" size="md" className="btn-md">
                                CS List
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loginspv" style={linkStyle} onClick={test1}>
                            <Button onClick={logOut} variant="danger" size="md" className="btn-md">
                                Logout
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

function test1() {
    alert("Anda");
}

export default NavbarSpv;
