# How This App Was Built: A Step-by-Step Guide

This document outlines the likely steps a developer would take to build this Contact List application from scratch using modern tools like Vite.

---

### Step 1: Project Setup with Vite

The fastest way to start a modern React project is with **Vite**.

You would run this command in your terminal:
```bash
npm create vite@latest contact-list-app -- --template react
```
This command creates a new directory (`contact-list-app`) with a minimal, fast, and pre-configured React setup. After creation, navigate into the directory and install the dependencies:
```bash
cd contact-list-app
npm install
```

---

### Step 2: Understanding the Vite Project Structure

Vite's structure is slightly different from older tools like Create React App:
-   `index.html` is in the root directory, not in `public/`.
-   `src/main.jsx` is the entry point (instead of `src/index.js`). We have renamed it to `src/index.jsx` in this project for clarity.
-   Component files use the `.jsx` extension by default.
-   The `public/` directory is only for static assets that don't get processed by the build tool (like `favicon.ico`).

To start the development server, you run `npm run dev`.

---

### Step 3: Creating the Static Data

Before building components, it's helpful to have some data to display.
-   Create a new file: `src/contactsData.js`.
-   In this file, create and export an array of contact objects, just like the one you see in the project.

---

### Step 4: Building the Components (Bottom-Up)

A good strategy is to build components from the smallest pieces upwards.

1.  **`ContactItem.jsx`:** Create a component to display a single contact.
2.  **`ContactList.jsx`:** Create a component that maps over an array of contacts and renders a `ContactItem` for each one.
3.  **`SearchBar.jsx`:** Create a component with a simple `<input>` field.

---

### Step 5: Assembling the Main App Component (`App.jsx`)

Now, put all the pieces together in `App.jsx`.
1.  **Import everything:** Import the components and the contact data.
2.  **Initial State:** Use `useState` to store the original, complete list of contacts.
3.  **Layout:** Add the components to the `return` statement to create the basic layout. Pass the contact data to `ContactList`.

At this point, you would have a non-interactive app that displays the full list of contacts.

---

### Step 6: Adding Search Functionality

To make the search bar work, you need to:
1.  **Add State for Search:** In `App.jsx`, add a state variable to hold the user's search query.
    ```jsx
    const [searchTerm, setSearchTerm] = useState('');
    ```
2.  **Lift State Up:** Pass the `setSearchTerm` function down to `SearchBar` as a prop. In `SearchBar`, call this function in the `onChange` event handler.
3.  **Derive the Filtered List:** Calculate the filtered list directly in the component body.
    ```jsx
    // in App.jsx
    const filteredContacts = allContacts.filter(/*...*/);
    ```
4.  **Connect to the List:** Pass the newly calculated `filteredContacts` array to the `ContactList` component.

---

### Step 7: Adding Optional Features (Sorting and Clicking)

To add the optional features, you would:

1.  **Implement Sorting:**
    -   Add a new state in `App.jsx` to track the sort order: `const [sortType, setSortType] = useState('default');`
    -   Add buttons to the UI that call `setSortType`.
    -   Expand the derived state logic: first filter, then sort the result.
    -   Pass the final `sortedAndFilteredContacts` array to the `ContactList`.

2.  **Implement Click-for-Details:**
    -   Create a handler function in `App.jsx`: `const handleContactClick = (contact) => { ... }`.
    -   Pass this function as a prop down through `ContactList` to each `ContactItem`.
    -   In `ContactItem`, add an `onClick` event to the main `div`.

---

### Step 8: Styling with a Dark Theme

The final step is to add CSS to make the application look good.
-   Define CSS variables for your color palette in `src/index.css`.
-   Apply a global dark background and text color to the `body`.
-   Style all components in `src/App.css` using the CSS variables for a consistent, modern, dark look.
-   Add `@media` queries to make the layout responsive.

And that's it! By following these steps, you can build a fully functional, interactive, and polished React application with Vite.
