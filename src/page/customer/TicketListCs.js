import React, { useEffect } from 'react';
import Navbar from "./Navbar"

const TicketListCs = ({history}) => {

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            history.push("/");
        }
    }, [history, token]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <button className="btn btn-primary">Create New Ticket</button>
            </div>
        </div>
    );

}

export default TicketListCs;