import { Link } from "react-router-dom"

export const Ticket = ({ticketObject, isStaff}) => {

    return <section className="ticket">
    <header>
        {
            isStaff
            ? `Ticket ${ticketObject.id}`
            : <Link to={`/tickets/${ticketObject.id}/edit`}>Ticket {ticketObject.id}</Link>

        }
    </header>
    <section>{ticketObject.description}</section>
    <section>Emergency: {ticketObject.emergency ? "🔔" : "🔕"}</section>
    <footer>
        {
            ticketObject.employeeTickets.length
            ? "Currently Being worked on..."
            :<button>Claim</button>
        }
    </footer>
</section>
}