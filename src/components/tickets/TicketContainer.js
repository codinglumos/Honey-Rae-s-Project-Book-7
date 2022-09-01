import { useState } from "react"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    return (
        <>
		<TicketList setterFunction={setSearchTerms}/> 
		<TicketSearch searchTermState={searchTerms}/>
	</>
    ) 
}