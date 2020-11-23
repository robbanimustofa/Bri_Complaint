import React, {Component} from 'react'
import NavbarSpv from '../NavbarSpv'
import {Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom"
import List from "./List"

class CsList extends Component {
    linkStyle = {
        color: "black",
    };
    render() {
        return(
            <div>
                <NavbarSpv />
                <div>
                    <Link to='/addcsaccount' style={this.linkStyle}>
                        <Button variant="primary" size="lg" className="btn-large button-color-394">
                            Add CS
                        </Button>
                    </Link>
                    <List />
                </div>

            </div>
        )
    }
}

export default CsList 
