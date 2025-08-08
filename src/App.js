import React, { useState, useEffect } from 'react';
import { contacts as contactsData } from './contactsData';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [allContacts] = useState(contactsData);
  const [filteredContacts, setFilteredContacts] = useState(allContacts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(results);
  }, [searchTerm, allContacts]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact List</h1>
      </header>
      <main>
        <SearchBar handleSearch={setSearchTerm} />
        <ContactList contacts={filteredContacts} />
      </main>
    </div>
  );
}

export default App;
