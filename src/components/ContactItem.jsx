/**
 * FILE: src/components/ContactItem.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This component is responsible for displaying the details of a single contact.
 * Like ContactList, it is a "presentational" component. Its only job is to
 * display the data it is given.
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `src/components/ContactList.jsx`: This component is rendered by
 *   `ContactList.jsx`. It receives an individual `contact` object as a prop.
 */

import React from 'react';

// Destructure props to get the `contact` object and the `onItemClick` function.
const ContactItem = ({ contact, onItemClick }) => {
  return (
    // Add the onClick event handler to the main div.
    // When this div is clicked, it will call the onItemClick function, passing
    // the specific contact object for this item as an argument.
    <div className="contact-item" onClick={() => onItemClick(contact)}>
      {/* Display the contact's name. The curly braces `{}` are used in JSX */}
      {/* to embed JavaScript expressions, in this case, the value of `contact.name`. */}
      <h3>{contact.name}</h3>

      {/* Display the contact's phone number. */}
      <p>{contact.phone}</p>

      {/* Display the contact's email address. */}
      <p>{contact.email}</p>
    </div>
  );
};

// Export the component so it can be imported by ContactList.jsx.
export default ContactItem;
