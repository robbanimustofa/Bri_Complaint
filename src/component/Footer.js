import React from "react";
// import { Row, Col } from "react-bootstrap";
import Logo from "../assets/icons/briwhite.svg";

function Footer() {
    return (
        <footer className="footer fixed-bottom">
            {/*<div className='d-flex'>*/}
            {/*    <div className=''></div>*/}
            {/*    <div className='justify-content-end'>*/}
            {/*        <div className=''></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className='row remove-m-lr'>
                <div className='col-4'></div>
                <div className='col-4 text-center remove-padding-lr'>Copyright @2020 Group 08 for Digitalent KOMINFO</div>
                <div className='col-4 remove-padding-lr text-right'><img src={Logo} alt="" /></div>
            </div>





            <div>

            </div>


                {/*<Col xs={4}></Col>*/}
                {/*<Col style={{ paddingLeft: "0px", paddingRight: "0px" }} xs={6}></Col>*/}
                {/*<Col style={{ paddingLeft: "0px", paddingRight: "0px", textAlign: 'end'}} xs={2}>*/}
                {/*    <img src={Logo} style={{marginRight:'20px'}} alt="" />*/}
                {/*</Col>*/}
        </footer>
    );
}

export default Footer;
