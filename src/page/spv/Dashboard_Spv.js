import React from "react";
import {Button} from "react-bootstrap";
import NavbarSpv from "./NavbarSpv"
import TicketListSpv from './TicketListSpv'

function Dashboard_Spv() {
    return (
        <div className="">
            <NavbarSpv/>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>

            <div className='row remove-m-lr'>
                <div className='col-sm-4 remove-padding-lr text-center'>
                    <div style={{ backgroundColor: "black", borderRadius: "50px", padding:'10px 0px', color: "white", textAlign: "center", border: "solid 10px white" }}>ID</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className='col-sm-4 remove-padding-lr text-center'>
                    <div style={{ backgroundColor: "black", borderRadius: "50px", padding:'10px 0px', color: "white", textAlign: "center", border: "solid 10px white" }}>Name</div>
                    <div>Robbani</div>
                    <div>Bastian</div>
                    <div>Retno</div>
                    <div>Linda</div>
                </div>
                <div className='col-sm-4 remove-padding-lr text-center'>
                    <div style={{ backgroundColor: "black", borderRadius: "50px", padding:'10px 0px', color: "white", textAlign: "center", border: "solid 10px white" }}>Status</div>
                    <div>Done</div>
                    <div>Progress</div>
                    <div>Done</div>
                    <div>Progress</div>
                </div>
            </div>
            {/*<div className="row remove-m-lr">*/}
            {/*    <div className='col-sm-12'>*/}
            {/*        <Table>*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Date</th>*/}
            {/*                <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Ticket Id</th>*/}
            {/*                <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Title</th>*/}
            {/*                <th style={{ backgroundColor: "black", borderRadius: "50px", color: "white", textAlign: "center", border: "solid 10px white" }}>Status</th>*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            <tr>*/}
            {/*                <td style={{ textAlign: "center", border: "solid 10px white" }}>mm/dd/yy 00.00.00</td>*/}
            {/*                <td style={{ textAlign: "center", border: "solid 10px white" }}>#123123</td>*/}
            {/*                <td style={{ textAlign: "center", border: "solid 10px white" }}>ATM saya ketelen anak</td>*/}
            {/*                <td style={{ textAlign: "center", border: "solid 10px white" }}>complicated</td>*/}
            {/*            </tr>*/}
            {/*            </tbody>*/}
            {/*        </Table>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="row remove-m-lr">*/}
            {/*    <div className='col-sm-12 remove-padding-lr text-right btn-pagination'>*/}
            {/*        <Button variant="primary" size="lg" className="btn-large button-color-394">*/}
            {/*            Previousss*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" size="lg" className="btn-large button-color-394">*/}
            {/*            Next*/}
            {/*        </Button>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<Button variant="outline-primary" className="btn-large" size="lg" disabled>Previous</Button>*/}
            {/*<Button variant="outline-primary" size="lg" className="btn-large-next" disabled>Next</Button>*/}
            <TicketListSpv />
        </div>
    );
}

export default Dashboard_Spv;
