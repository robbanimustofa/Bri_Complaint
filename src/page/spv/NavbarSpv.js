import React from 'react'
import { Button } from "react-bootstrap";


const NavbarSpv = () => {
    const linkStyle = {
        color: "black",
    };
    return (
        <div className="navbar d-flex justify-content-between">
            <div className="">
                <h1 className="navbar-brand font-goldman font-57">BRI Complaint | SPV</h1>
            </div>
            <div id={'button_nav'}>
                <ul className="nav">
                    <li className="nav-item">
                            <Button variant="primary" size="md" className="btn-md">
                                Ticket List
                            </Button>
                    </li>
                    <li className="nav-item">
                            <Button variant="primary" size="md" className="btn-md">
                                My Ticket
                            </Button>
                    </li>
                    <li className="nav-item">
                            <Button variant="primary" size="md" className="btn-md">
                                CS List
                            </Button>
                    </li>
                    <li className="nav-item">
                            <Button variant="danger" size="md" className="btn-md">
                                Logout
                            </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

function test1() {
    alert("Anda Berhasil logout");
}

export default NavbarSpv;
