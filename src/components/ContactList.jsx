import React, { useEffect, useState } from "react";
import ContactRow from "./ContactRow";


export default function ContactList({ setSelectedContactId }) {
    const dummyContacts = [
        { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
        { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
        { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
    ];
    const [contacts, setContacts] = useState(dummyContacts)
    console.log("Contacts: ", contacts)
    const [boo, setBoo] = useState('0')

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );
                const result = await response.json();
                setContacts(result);
                console.log(contacts);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
    }, []);

    //code below establishes contact list table 
    return (

        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>


                    {
                        contacts.map((contact) => {
                            return <ContactRow key={contact.id} contact={contact} setbool={setSelectedContactId} />;
                        })
                    }
                </tbody>
            </table>
        </>
    );
}