import React from 'react'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container"> 
                <h1 className="navbar-brand font-goldman font-57" href="#">BRI Complaint</h1>
                <ul className="nav justify-content-end">
                    <li className="nav nav-item">
                        <a href="#" className="nav nav-link active btn btn-danger bg-btn">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar;