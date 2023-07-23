
import React, { useState } from "react";

export default function ContactRow({ setbool, contact }) {
    const [selectedContactId, setselectedContactId] = useState(false)

    return (
        //make an onclick method that will dropdown the contacts usernamme and website
        <>
            <tr onClick={(() => {
                setselectedContactId(!selectedContactId)
                setbool(contact.id)
            })}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
            {/* connect the display contact to the new info */}
            {
                selectedContactId &&
                // add the contact username and website to the contacts information in the dropdown box
                <tr>
                    <td>{contact.username} </td>
                    <td>{contact.website} </td>
                </tr>

            }
        </>
    );
}
