import React from "react";
import {Button, Table} from "react-bootstrap";
import NavbarSpv from "./NavbarSpv"
import TicketListSpv from './TicketListSpv'

function Dashboard_Spv() {
    return (
        <div className="">
            <NavbarSpv/>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394 m-tb-10">
                    Get Ticket
                </Button>
            </div>

            {/*<div className='row remove-m-lr'>*/}
            {/*    <div className='col-sm-4 remove-padding-lr text-center'>*/}
            {/*        <div style={{ backgroundColor: "black", borderRadius: "50px", padding:'10px 0px', color: "white", textAlign: "center", border: "solid 10px white" }}>ID</div>*/}
            {/*        <div>1</div>*/}
            {/*        <div>2</div>*/}
            {/*        <div>3</div>*/}
            {/*    </div>*/}
            {/*    <div className='col-sm-4 remove-padding-lr text-center'>*/}
            {/*        <div style={{ backgroundColor: "black", borderRadius: "50px", padding:'10px 0px', color: "white", textAlign: "center", border: "solid 10px white" }}>Name</div>*/}
            {/*        <div>Robbani</div>*/}
            {/*        <div>Bastian</div>*/}
            {/*        <div>Retno</div>*/}
            {/*        <div>Linda</div>*/}
            {/*    </div>*/}
            {/*    <div className='col-sm-4 remove-padding-lr text-center'>*/}
            {/*        <div style={{ backgroundColor: "black", borderRadius: "50px", padding:'10px 0px', color: "white", textAlign: "center", border: "solid 10px white" }}>Status</div>*/}
            {/*        <div>Done</div>*/}
            {/*        <div>Progress</div>*/}
            {/*        <div>Done</div>*/}
            {/*        <div>Progress</div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Table>
                <thead>
                <tr>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Ticket Id</th>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Title</th>
                    <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Status</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
    );
}

export default Dashboard_Spv;
