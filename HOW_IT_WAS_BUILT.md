# How This App Was Built: A Step-by-Step Guide

This document outlines the likely steps a developer would take to build this Contact List application from scratch using Next.js.

---

### Step 1: Project Setup with Next.js

The fastest way to start a new Next.js project is with `create-next-app`.

You would run this command in your terminal:
```bash
npx create-next-app@latest contact-list-app
```
This command creates a new directory (`contact-list-app`) with a pre-configured Next.js setup. After creation, navigate into the directory:
```bash
cd contact-list-app
```

---

### Step 2: Understanding the Next.js Project Structure

Next.js has a specific project structure:
-   `app/`: This directory contains the pages of the application.
-   `app/layout.jsx`: This is the main layout of the application.
-   `app/page.jsx`: This is the main page of the application.
-   `public/`: This directory is for static assets.
-   `next.config.mjs`: This file contains the Next.js configuration.

To start the development server, you run `npm run dev`.

---

### Step 3: Creating the Static Data

Before building components, it's helpful to have some data to display.
-   Create a new file: `contactsData.js`.
-   In this file, create and export an array of contact objects, just like the one you see in the project.

---

### Step 4: Building the Components (Bottom-Up)

A good strategy is to build components from the smallest pieces upwards.

1.  **`ContactItem.jsx`:** Create a component to display a single contact.
2.  **`ContactList.jsx`:** Create a component that maps over an array of contacts and renders a `ContactItem` for each one.
3.  **`SearchBar.jsx`:** Create a component with a simple `<input>` field.

---

### Step 5: Assembling the Main Page (`app/page.jsx`)

Now, put all the pieces together in `app/page.jsx`.
1.  **Import everything:** Import the components and the contact data.
2.  **Initial State:** Use `useState` to store the original, complete list of contacts.
3.  **Layout:** Add the components to the `return` statement to create the basic layout. Pass the contact data to `ContactList`.

At this point, you would have a non-interactive app that displays the full list of contacts.

---

### Step 6: Adding Search Functionality

To make the search bar work, you need to:
1.  **Add State for Search:** In `app/page.jsx`, add a state variable to hold the user's search query.
    ```jsx
    const [searchTerm, setSearchTerm] = useState('');
    ```
2.  **Lift State Up:** Pass the `setSearchTerm` function down to `SearchBar` as a prop. In `SearchBar`, call this function in the `onChange` event handler.
3.  **Derive the Filtered List:** Calculate the filtered list directly in the component body.
    ```jsx
    // in app/page.jsx
    const filteredContacts = allContacts.filter(/*...*/);
    ```
4.  **Connect to the List:** Pass the newly calculated `filteredContacts` array to the `ContactList` component.

---

### Step 7: Adding Optional Features (Sorting and Clicking)

To add the optional features, you would:

1.  **Implement Sorting:**
    -   Add a new state in `app/page.jsx` to track the sort order: `const [sortType, setSortType] = useState('default');`
    -   Add buttons to the UI that call `setSortType`.
    -   Expand the derived state logic: first filter, then sort the result.
    -   Pass the final `sortedAndFilteredContacts` array to the `ContactList`.

2.  **Implement Click-for-Details:**
    -   Create a handler function in `app/page.jsx`: `const handleContactClick = (contact) => { ... }`.
    -   Pass this function as a prop down through `ContactList` to each `ContactItem`.
    -   In `ContactItem`, add an `onClick` event to the main `div`.

---

### Step 8: Styling with a Dark Theme

The final step is to add CSS to make the application look good.
-   Define CSS variables for your color palette in `app/globals.css`.
-   Apply a global dark background and text color to the `body`.
-   Style all components in `app/page.module.css` using the CSS variables for a consistent, modern, dark look.
-   Add `@media` queries to make the layout responsive.

And that's it! By following these steps, you can build a fully functional, interactive, and polished Next.js application.
