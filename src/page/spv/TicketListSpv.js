import React, { Component } from 'react'
import axios from 'axios'
import TicketsSpv from './TicketsSpv'
import Pagination from './Pagination'


class TicketListSpv extends Component {


    state = {
        tickets: [],
        loading: false,
        currentPage: 1,
        ticketsPerPage: 5
    }

    fetchTicket = async () => {
        const apiURL = "https://882a64c378f3.ngrok.io/api/spv/tickets/lists/escalated";
        const response = await axios.get(apiURL, {
            headers: {
                "x-access-token": JSON.parse(localStorage.getItem('token'))
            }
        })

        this.setState({
            tickets: response.data
        })

        this.setState({
            loading: false
        })
    }

    componentDidMount = () => {
        this.fetchTicket()
    }

    render() {

        const { currentPage, ticketsPerPage, tickets, loading } = this.state

        const indexOfLastTicket = currentPage * ticketsPerPage
        const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage
        const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket)

        const paginate = pageNum => {
            this.setState({
                currentPage: pageNum
            })
        }

        const nextPage = () => this.setState({
            currentPage: currentPage + 1
        })

        const prevPage = () => this.setState({
            currentPage: currentPage - 1
        })

        return (
            <div>
                <TicketsSpv tickets={currentTickets} loading={loading} />
                <Pagination ticketsPerPage={ticketsPerPage} totalTickets={tickets.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
        )
    }
}

export default TicketListSpv