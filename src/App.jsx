import { useState } from 'react'

import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';


const selectedContactId = null
const setSelectedContactId = null
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}


