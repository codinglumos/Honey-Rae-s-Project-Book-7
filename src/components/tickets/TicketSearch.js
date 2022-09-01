//import { setterFunction } from "./TicketContainer"

export const TicketSearch = ({ setterFunction }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                      setterFunction(changeEvent.target.value)  
                    }
                }
            type="text" placeholder="Enter Search Terms..." />
        </div>
        
    )
}