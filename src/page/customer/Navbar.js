import React from 'react'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <a className="navbar-brand" href="#">BRI Complaint</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link active btn-danger">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar;