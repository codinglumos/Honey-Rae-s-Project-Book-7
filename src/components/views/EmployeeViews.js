import { Outlet, Route, Routes } from "react-router-dom"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { CustomerDetails } from "../customers/CustomerDetails"
import { CustomerList } from "../customers/CustomerList"
import { Profile } from "../profile/Profile"
import { Ticket } from "../tickets/Ticket"

//import { TicketForm } from "../tickets/TicketForm"
//import { TicketList } from "../tickets/TicketList"
//import { TicketSearch } from "../tickets/TicketSearch"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="profile" element={ <Profile/> } />
                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
                <Route path="customers" element={ <CustomerList />} />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
                <Route path="ticket" element={ <Ticket />} />
		    </Route>
        </Routes>
    )
}