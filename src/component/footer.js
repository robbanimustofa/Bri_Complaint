import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo from "../assets/icons/briwhite.svg"

function footer() {
  return (
    <footer className="footer">
      <Row style={{marginLeft:"0px", marginRight:"0px"}}>
        <Col xs={5}></Col>
        <Col style={{paddingLeft:"0px", paddingRight:"0px"}} xs={5}>Copyright @2020 Group 08 for Digitalent KOMINFO</Col>
        <Col style={{paddingLeft:"0px", paddingRight:"0px", textAlign:'end'}} xs={2}>
          <img src={Logo} alt="" />
        </Col>
      </Row>
    </footer>
  );
}

export default footer;
