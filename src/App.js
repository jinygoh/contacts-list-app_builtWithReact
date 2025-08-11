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
 * - `src/index.js`: This file is rendered into the DOM by `index.js`.
 * - `src/contactsData.js`: It imports the initial list of contacts from this file.
 * - `src/components/ContactList.js`: It renders the ContactList component and
 *   passes the list of contacts to it as a "prop".
 * - `src/components/SearchBar.js`: It renders the SearchBar component and gives
 *   it a function to call whenever the user types in the search box.
 * - `src/App.css`: It imports its own specific styles from this file.
 */

// Import necessary parts of the React library.
// - `React` is the core React library.
// - `useState` is a "Hook" that lets you add state (data that can change) to
//   functional components.
// - `useEffect` is another "Hook" that lets you perform side effects in your
//   components, such as fetching data or, in this case, re-calculating the
//   filtered list of contacts whenever the search term changes.
import React, { useState, useEffect } from 'react';

// Import the initial list of contacts from our local data file.
// We are renaming `contacts` to `contactsData` here to make it clearer.
import { contacts as contactsData } from './contactsData';

// Import the other components that this App component will use.
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

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


  // --- SIDE EFFECTS ---
  // `useEffect` runs a function after every render, but we can control when it
  // runs by providing a "dependency array".
  useEffect(() => {
    // This function will run whenever a variable in the dependency array changes.

    // Filter the `allContacts` list.
    const results = allContacts.filter(contact =>
      // For each contact, check if their name (in lowercase) includes the
      // search term (also in lowercase). This makes the search case-insensitive.
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // After filtering, update the `filteredContacts` state with the results.
    // This will cause React to re-render the components that use this state
    // (specifically, the `ContactList` component).
    setFilteredContacts(results);

  }, [searchTerm, allContacts]); // The dependency array. This effect runs ONLY when `searchTerm` or `allContacts` changes.


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

        {/* Render the ContactList component. */}
        {/* We pass the `filteredContacts` state to it as a "prop" named `contacts`. */}
        {/* This gives the ContactList the data it needs to display. */}
        <ContactList contacts={filteredContacts} />
      </main>
    </div>
  );
}

// Export the App component so that it can be imported and used by other files,
// specifically `src/index.js`.
export default App;
