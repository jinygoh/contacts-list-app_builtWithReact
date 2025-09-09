/**
 * FILE: src/contactsData.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This file contains the initial, static data for the application. In a real-
 * world application, this data would likely come from a database via a network
 * request (an API call), but for this example, we are using a simple, hardcoded
 * array of JavaScript objects.
 *
 * Each object in the array represents a single contact and has a unique `id`,
 * a `name`, a `phone` number, and an `email` address.
 *
 * The `export` keyword makes the `contacts` array available for other files
 * to import and use.
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `src/App.js`: Imports this `contacts` array to use as the initial state
 *   for the `allContacts` state variable.
 */

export const contacts = [
  { id: 1, name: 'Alice Johnson', phone: '123-456-7890', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', phone: '234-567-8901', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', phone: '345-678-9012', email: 'charlie@example.com' },
  { id: 4, name: 'Diana Prince', phone: '456-789-0123', email: 'diana@example.com' },
  { id: 5, name: 'Ethan Hunt', phone: '567-890-1234', email: 'ethan@example.com' },
  { id: 6, name: 'Fiona Glenanne', phone: '678-901-2345', email: 'fiona@example.com' },
  { id: 7, name: 'George Costanza', phone: '789-012-3456', email: 'george@example.com' },
  { id: 8, name: 'Hannah Montana', phone: '890-123-4567', email: 'hannah@example.com' },
  { id: 9, name: 'Indiana Jones', phone: '901-234-5678', email: 'indiana@example.com' },
  { id: 10, name: 'Jack Sparrow', phone: '012-345-6789', email: 'jack@example.com' },
  { id: 11, name: 'Kara Danvers', phone: '112-233-4455', email: 'kara@example.com' },
  { id: 12, name: 'Luke Skywalker', phone: '223-344-5566', email: 'luke@example.com' }
];
