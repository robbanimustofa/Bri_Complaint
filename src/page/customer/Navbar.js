import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    const LogoutHandle=()=>{
        alert("Serius mau logout?");
        localStorage.removeItem('token');
    }

    return(
        <div className="navbar">
            <div className="container">
                <h1 className="navbar-brand font-goldman font-57">BRI Complaint</h1>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <div className="nav-link active btn btn-danger bg-btn" onClick={LogoutHandle}>Log out</div>
                    </li>
                </ul>
            </div>
        </div>
    ) 
};

function test1() {
    alert("Serius mau logout?");
}

export default Navbar;
