/**
 * FILE: src/App.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This is the main component of the application, often referred to as the "root"
 * or "entry-point" component. It acts as a container for all other components.
 *
 * It holds the primary state (the data) for the application and the core logic
 * for handling user interactions, like searching.
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `src/index.jsx`: This file is rendered into the DOM by `index.jsx`.
 * - `src/contactsData.js`: It imports the initial list of contacts from this file.
 * - `src/components/ContactList.jsx`: It renders the ContactList component and
 *   passes the list of contacts to it as a "prop".
 * - `src/components/SearchBar.jsx`: It renders the SearchBar component and gives
 *   it a function to call whenever the user types in the search box.
 * - `src/App.css`: It imports its own specific styles from this file.
 */

// Import necessary parts of the React library.
// - `React` is the core React library.
// - `useState` is a "Hook" that lets you add state (data that can change) to
//   functional components.
// - `useEffect` is another "Hook" that lets you perform side effects in your
//   components. This project has been refactored to use derived state instead
//   of useEffect for filtering and sorting.
import React, { useState } from 'react';

// Import the initial list of contacts from our local data file.
// We are renaming `contacts` to `contactsData` here to make it clearer.
import { contacts as contactsData } from './contactsData.js';

// Import the other components that this App component will use.
import ContactList from './components/ContactList.jsx';
import SearchBar from './components/SearchBar.jsx';

// Import the stylesheet for this component.
import './App.css';


/**
 * The main App component. In React, components are like JavaScript functions
 * that return HTML (or more accurately, JSX).
 */
function App() {
  // --- STATE MANAGEMENT ---
  // `useState` is a function that returns a pair of values: the current state
  // and a function that lets you update it. It's like a component's memory.

  // 1. `allContacts`: Holds the original, complete list of contacts.
  //    - `allContacts` is the state variable (the data).
  //    - `useState(contactsData)` initializes it with our imported contact list.
  //    - We don't need the setter function here, so we just get the variable.
  const [allContacts] = useState(contactsData);

  // 2. `filteredContacts`: Holds the list of contacts that match the search term.
  //    - `filteredContacts` is the state variable.
  //    - `setFilteredContacts` is the function we'll use to update this list.
  //    - It's initialized to be the same as `allContacts` at the start.
  const [filteredContacts, setFilteredContacts] = useState(allContacts);

  // 3. `searchTerm`: Holds the text the user has typed into the search bar.
  //    - `searchTerm` is the state variable.
  //    - `setSearchTerm` is the function we'll use to update the search text.
  //    - It's initialized as an empty string.
  const [searchTerm, setSearchTerm] = useState('');

  // 4. `sortType`: Holds the current sorting method.
  const [sortType, setSortType] = useState('default');


  // --- DERIVED STATE ---
  // Instead of using useEffect to update a separate state variable for filtered
  // contacts, we can derive it directly during rendering. This is often cleaner.

  // 1. Filter contacts based on the search term.
  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Sort the filtered contacts based on the sort type.
  const sortedAndFilteredContacts = [...filteredContacts].sort((a, b) => {
    if (sortType === 'name-asc') {
      return a.name.localeCompare(b.name); // A-Z
    }
    if (sortType === 'name-desc') {
      return b.name.localeCompare(a.name); // Z-A
    }
    return 0; // Default order
  });


  // --- EVENT HANDLERS ---
  /**
   * Handles the click event on a contact item.
   * @param {object} contact - The contact object that was clicked.
   */
  const handleContactClick = (contact) => {
    alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
  };


  // --- RENDER ---
  // The `return` statement contains the JSX (a syntax extension for JavaScript)
  // that describes what the UI should look like.
  return (
    // The `className` attribute is the equivalent of the HTML `class` attribute.
    <div className="App">
      <header className="App-header">
        <h1>Contact List</h1>
      </header>
      <main>
        {/* Render the SearchBar component. */}
        {/* We pass the `setSearchTerm` function to it as a "prop" named `handleSearch`. */}
        {/* This allows the SearchBar to tell the App component when the search text changes. */}
        <SearchBar handleSearch={setSearchTerm} />

        {/* Sorting controls */}
        <div className="sort-controls">
          <span>Sort by:</span>
          <button onClick={() => setSortType('name-asc')}>Name (A-Z)</button>
          <button onClick={() => setSortType('name-desc')}>Name (Z-A)</button>
          <button onClick={() => setSortType('default')}>Default</button>
        </div>

        {/* Render the ContactList component. */}
        {/* We pass the derived `sortedAndFilteredContacts` state to it as a "prop". */}
        {/* This gives the ContactList the data it needs to display. */}
        <ContactList
          contacts={sortedAndFilteredContacts}
          onContactClick={handleContactClick}
        />
      </main>
    </div>
  );
}

// Export the App component so that it can be imported and used by other files,
// specifically `src/index.jsx`.
export default App;
