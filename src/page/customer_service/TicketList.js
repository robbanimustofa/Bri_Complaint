import React, { Component } from 'react'
import axios from 'axios'
import Tickets from './Tickets'
import Pagination from './Pagination'


class TicketList extends Component {


    state = {
        tickets: [],
        loading: false,
        currentPage: 1,
        ticketsPerPage: 5
    }

    fetchTicket = async () => {
        const apiURL = "https://df2afb21096c.ngrok.io/api/cs/tickets/lists/unread";
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

    componentDidMount = () =>  {
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

        return(
            <div>
                <Tickets tickets={currentTickets} loading={loading} /> 
                <Pagination ticketsPerPage={ticketsPerPage} totalTickets={tickets.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
            </div>
        )
    }
}

export default TicketList