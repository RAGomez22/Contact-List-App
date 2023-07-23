
import React, { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState()
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)

                const result = await response.json();
                setContact(result);
                console.log(contact);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
    }, []);

    return (
        //make an onclick method that will dropdown the contacts usernamme and website
        <>
            <button onClick={(() => {
                setSelectedContactId(undefined)

            })}> Back</button>






        </>

    );
}
