import React from "react";
// import { Row, Col } from "react-bootstrap";
import Logo from "../assets/icons/briwhite.svg";

function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className='row remove-m-lr'>
                <div className='col-4'></div>
                <div className='col-4 text-center remove-padding-lr'>Copyright @2020 Group 08 for Digitalent KOMINFO</div>
                <div className='col-4 remove-padding-lr text-right'><img src={Logo} alt="" /></div>
            </div>
        </footer>
    );
}

export default Footer;
