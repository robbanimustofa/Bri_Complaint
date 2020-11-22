import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const NavbarCustomer = () => {
    const linkStyle = {
        color: "black",
    };

    const logoutHandle = () => {
        localStorage.removeItem('token');
    }

    return (
        <div className="navbar">
            <div>
                <h1 className="navbar-brand font-goldman font-57">BRI Complaint</h1>
            </div>
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav nav-item">
                        <Link style={linkStyle} to='/'>
                            <Button variant="danger" size="md" className="btn-md" onClick={logoutHandle}>
                                Logout
                            </Button>
                        </Link>
                        {/*<div className="nav nav-link active btn btn-danger bg-btn">Log out</div>*/}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarCustomer;
