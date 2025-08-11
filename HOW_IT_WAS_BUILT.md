# How This App Was Built: A Step-by-Step Guide

This document outlines the likely steps a developer would take to build this Contact List application from scratch.

---

### Step 1: Project Setup with Create React App

The easiest way to start a new React project is with **Create React App**, a tool that sets up a complete, configured development environment.

You would run this command in your terminal:
```bash
npx create-react-app contact-list-app
```
This command creates a new directory (`contact-list-app`) with all the necessary files, including the `package.json`, `src` directory, and `public` directory that you see in this project.

---

### Step 2: Cleaning Up the Default Project

Create React App provides a default template. The next step is to remove the boilerplate code you don't need.
-   Delete `src/logo.svg`.
-   Clean up `src/App.js` to be a simple, empty component.
-   Remove the boilerplate styles from `src/App.css`.

---

### Step 3: Creating the Static Data

Before building components, it's helpful to have some data to display.
-   Create a new file: `src/contactsData.js`.
-   In this file, create and export an array of contact objects, just like the one you see in the project.

---

### Step 4: Building the Components (Bottom-Up)

A good strategy is to build components from the smallest pieces upwards.

1.  **`ContactItem.js`:** Create a component to display a single contact.
2.  **`ContactList.js`:** Create a component that maps over an array of contacts and renders a `ContactItem` for each one.
3.  **`SearchBar.js`:** Create a component with a simple `<input>` field.

---

### Step 5: Assembling the Main App Component (`App.js`)

Now, put all the pieces together in `App.js`.
1.  **Import everything:** Import the components and the contact data.
2.  **Initial State:** Use `useState` to store the original, complete list of contacts.
3.  **Layout:** Add the components to the `return` statement to create the basic layout. Pass the contact data to `ContactList`.

At this point, you would have a non-interactive app that displays the full list of contacts.

---

### Step 6: Adding Search Functionality

To make the search bar work, you need to:
1.  **Add State for Search:** In `App.js`, add a state variable to hold the user's search query.
    ```jsx
    const [searchTerm, setSearchTerm] = useState('');
    ```
2.  **Lift State Up:** Pass the `setSearchTerm` function down to `SearchBar` as a prop. In `SearchBar`, call this function in the `onChange` event handler.
3.  **Derive the Filtered List:** Instead of using `useEffect`, calculate the filtered list directly in the component body. This is simpler and less prone to bugs.
    ```jsx
    // in App.js
    const filteredContacts = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    ```
4.  **Connect to the List:** Pass the newly calculated `filteredContacts` array to the `ContactList` component.

---

### Step 7: Adding Optional Features (Sorting and Clicking)

To add the optional features, you would:

1.  **Implement Sorting:**
    -   Add a new state in `App.js` to track the sort order: `const [sortType, setSortType] = useState('default');`
    -   Add buttons to the UI that call `setSortType` with different values (e.g., 'name-asc').
    -   Expand the derived state logic: first filter, then sort the result of the filtering. Use the `.sort()` method on the `filteredContacts` array.
    -   Pass the final `sortedAndFilteredContacts` array to the `ContactList`.

2.  **Implement Click-for-Details:**
    -   Create a handler function in `App.js`: `const handleContactClick = (contact) => { ... }`.
    -   Pass this function as a prop all the way down: from `App` to `ContactList`, and then from `ContactList` to each `ContactItem`.
    -   In `ContactItem`, add an `onClick` event to the main `div` that calls the function it received via props.

---

### Step 8: Styling

The final step is to add CSS to make the application look good.
-   Style the main components, layout, and typography in `App.css` and `index.css`.
-   Add styles for the new sort control buttons.
-   Add a `cursor: pointer` to the contact items to show they are clickable.
-   Add `@media` queries to make the layout responsive on different screen sizes.

And that's it! By following these steps, you can build a fully functional, interactive, and polished React application.
