import React from "react";
import {Button} from "react-bootstrap";

function Dashboard_Spv() {
    return (
        <div>
            <div>
                <Button variant="primary" size="lg" className="btn-large button-color-394">
                    Get Ticket
                </Button>
            </div>
            <div className="container">
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">Ticket Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Larry the Rhino</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard_Spv;
