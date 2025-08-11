/**
 * FILE: src/components/ContactList.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This component is responsible for displaying a list of contacts. It's a "dumb"
 * or "presentational" component because it doesn't have its own state or complex
 * logic. It simply receives a list of contacts (via props) and renders them.
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `src/App.jsx`: This component is rendered by `App.jsx` and receives the
 *   `contacts` array and an `onContactClick` function as props.
 * - `src/components/ContactItem.jsx`: For each contact in its `contacts` prop,
 *   it renders a `ContactItem` component, passing the individual contact's
 *   data and the click handler down to it.
 */

import React from 'react';
import ContactItem from './ContactItem.jsx';

// This is a functional component defined as an arrow function.
// It uses "destructuring" to directly access the `contacts` and `onContactClick`
// props from the props object.
const ContactList = ({ contacts, onContactClick }) => {
  return (
    // A container div for the list of contacts.
    <div className="contact-list">
      {/*
        Here, we're using JavaScript's `map` function to transform the array of
        contact objects into an array of `ContactItem` components.

        - `contacts.map(...)`: For each `contact` object in the `contacts` array...
        - `(...) => <ContactItem ... />`: ...return a new `ContactItem` component.

        This is a core pattern in React for rendering lists of data.
      */}
      {contacts.map(contact => (
        // Render a `ContactItem` component for this specific contact.
        <ContactItem
          // The `key` prop is a special, required prop when creating lists of
          // elements in React. It helps React identify which items have changed,
          // are added, or are removed. Keys should be stable and unique among
          // siblings. The contact's `id` is a perfect candidate.
          key={contact.id}

          // The `contact` prop passes the entire contact object down to the
          // `ContactItem` component, so it has the data it needs to render.
          contact={contact}
          // Pass the click handler function down to the item component.
          onItemClick={onContactClick}
        />
      ))}
    </div>
  );
};

// Export the component so it can be imported by App.jsx.
export default ContactList;
