import React from 'react'
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";


const Navbar_Spv = () => {
    const linkStyle = {
        color: "black",
    };
    return(
        <div className="navbar d-flex">
            <div className="">
                <h1 className="navbar-brand font-goldman font-57">BRI Complaint | SPV</h1>
            </div>
            <div id={'button_nav'}>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/loginspv" style={linkStyle} onClick={test1}>
                            <Button variant="primary" size="lg" className="btn-large">
                                Ticket List
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loginspv" style={linkStyle} onClick={test1}>
                            <Button variant="primary" size="lg" className="btn-large">
                                My Ticket
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loginspv" style={linkStyle} onClick={test1}>
                            <Button variant="primary" size="lg" className="btn-large">
                                CS List
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loginspv" style={linkStyle} onClick={test1}>
                            <Button variant="danger" size="lg" className="btn-large">
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

export default Navbar_Spv;
