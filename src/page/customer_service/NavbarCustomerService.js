import React from 'react'
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";


const NavbarCustomerService = () => {
    const linkStyle = {
        color: "black",
    };

    const logoutHandle = () => {
        localStorage.removeItem('token');
    }

    return(
        <div className="navbar d-flex">
            <div className="">
                <h1 className="navbar-brand font-goldman font-57">BRI Complaint | CS</h1>
            </div>
            <div id={'button_nav'}>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/dashboardcs" style={linkStyle}>
                            <Button variant="primary" size="lg" className="btn-large">
                                Ticket List
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/myticketcs" style={linkStyle}>
                            <Button variant="primary" size="lg" className="btn-large">
                                My Ticket
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logincs" style={linkStyle} >
                            <Button variant="danger" size="lg" className="btn-large" onClick={logoutHandle}>
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
    alert("Anda Berhasil logout");
}

export default NavbarCustomerService;
