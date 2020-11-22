import React, { Component } from 'react'

class Pagination extends Component {

    render() {

        const { ticketsPerPage, totalTickets, paginate, nextPage, prevPage } = this.props

        // const pageNumbers =[]

        // for(let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++ ) {
        //     pageNumbers.push(i)
        // }

        return (
            <nav className="">
                <ul className="pagination justify-content-end">
                    <li className="page-item mr-3">
                        <button className="page-link" onClick={() => prevPage()}>Previous</button>
                    </li>
                    {/* {
                        pageNumbers.map(num => {
                            return(
                                <li className="page-item" key={num}>
                                    <button onClick={() => paginate(num)} className="page-link">{num}</button>
                                </li>
                            )
                        })
                    } */}
                    <li className="page-item">
                        <button className="page-link" onClick={() => nextPage()}>Next</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination