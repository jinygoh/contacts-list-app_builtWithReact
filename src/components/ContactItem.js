/**
 * FILE: src/components/ContactItem.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This component is responsible for displaying the details of a single contact.
 * Like ContactList, it is a "presentational" component. Its only job is to
 * display the data it is given.
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `src/components/ContactList.js`: This component is rendered by
 *   `ContactList.js`. It receives an individual `contact` object as a prop.
 */

import React from 'react';

// This component also destructures its props to get the `contact` object directly.
const ContactItem = ({ contact }) => {
  return (
    // A container div for a single contact's information.
    <div className="contact-item">
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

// Export the component so it can be imported by ContactList.js.
export default ContactItem;
