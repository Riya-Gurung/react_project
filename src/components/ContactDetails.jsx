import React from "react";
import { useContext } from "react";
import { contactContext } from "./Contact";

function ContactDetails(){

    const{contactData}=useContext(contactContext)
    return(
        <div className="m-5 p-5 rounded-xl bg-pink-600" >

<h2 className="text-white font-bold text-2xl">Contact Information</h2>
            <p>Name:{contactData.name}</p>
            <p>Email:{contactData.email}</p>
            <p>Phone:{contactData.phone}</p>
            <p>Address:{contactData.address}</p>
        </div>
    )
}
export default ContactDetails;