/**
 * FILE: src/components/SearchBar.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This component provides a search input field for the user. It's an example
 * of a "controlled component" in reverse. Instead of holding the state of the
 * input field itself, it lifts the state up to its parent component (`App.js`)
 * by calling a function passed down through props.
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `src/App.jsx`: This component is rendered by `App.jsx`. It receives the
 *   `setSearchTerm` function from `App.jsx` as a prop named `handleSearch`.
 */

import React from 'react';

// Destructure props to get the `handleSearch` function.
const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name..."
        // The `onChange` event is fired every time the user types a character
        // into the input field.
        onChange={e =>
          // When the event fires, we call the `handleSearch` function that was
          // passed down from App.js.
          // `e` is the event object. `e.target` is the input element itself.
          // `e.target.value` is the current text inside the input field.
          // By calling `handleSearch(e.target.value)`, this component tells
          // App.js to update the `searchTerm` state with the new value.
          handleSearch(e.target.value)
        }
      />
    </div>
  );
};

export default SearchBar;
