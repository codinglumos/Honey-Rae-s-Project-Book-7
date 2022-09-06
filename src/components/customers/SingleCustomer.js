import { Link } from "react-router-dom"

export const Customer = ({ id, fullName, email, address, phoneNumber}) => {
    return <section className="customer">
    <div>
        <Link to={`/customers/${id}`}>Name: {fullName}</Link>
    </div>
    <div>Email: {email}</div>
    <div>Address: {address}</div>
    <div>Phone Number: {phoneNumber}</div>
</section>
}