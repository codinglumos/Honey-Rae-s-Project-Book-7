import { useEffect } from "react"
import { Customer } from "./SingleCustomer"
import "./customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
 
    useEffect(
       () => {
        return fetch("http://localhost:8088/users?isStaff=false")
        .then(response => response.json())
        .then((customerArray) => {
            setCustomers(customerArray)
        })

       },

       [] 
    )

    return <article className="customers">
    {
        customers.map(customer => <Customer key={`customer--${customer.id}`} 
        id={customer.id} 
        fullName={customer.fullName} 
        email={customer.email}
        address={customer.address}
        phoneNumber={customer.phoneNumber}
        />
       
    )
    }
    </article>

}
