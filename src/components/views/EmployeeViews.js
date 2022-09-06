import { Outlet, Route, Routes } from "react-router-dom"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { CustomerDetails } from "../customers/CustomerDetails"

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

                <Route path="tickets" element={ <TicketContainer />} />
                <Route path="employees" element={ <EmployeeList />} />
                <Route path="employees/:employeeId" element={ <EmployeeDetails /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
		    </Route>
        </Routes>
    )
}