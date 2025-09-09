"use client";

import { useState } from 'react';
import { contacts as contactsData } from '@/contactsData.js';
import ContactList from '@/components/ContactList.jsx';
import SearchBar from '@/components/SearchBar.jsx';
import styles from './page.module.css';


function Home() {
  const [allContacts] = useState(contactsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('default');

  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAndFilteredContacts = [...filteredContacts].sort((a, b) => {
    if (sortType === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortType === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  const handleContactClick = (contact) => {
    alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
  };

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <h1>Contact List</h1>
      </header>
      <main className={styles.main}>
        <SearchBar handleSearch={setSearchTerm} />

        <div className={styles['sort-controls']}>
          <span>Sort by:</span>
          <button onClick={() => setSortType('name-asc')}>Name (A-Z)</button>
          <button onClick={() => setSortType('name-desc')}>Name (Z-A)</button>
          <button onClick={() => setSortType('default')}>Default</button>
        </div>

        <ContactList
          contacts={sortedAndFilteredContacts}
          onContactClick={handleContactClick}
        />
      </main>
    </div>
  );
}

export default Home;
