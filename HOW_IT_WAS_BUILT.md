# How This App Was Built: A Step-by-Step Guide (Vue Edition)

This document outlines the likely steps a developer would take to build this Contact List application from scratch using modern tools like Vite and Vue.

---

### Step 1: Project Setup with Vite

The fastest way to start a modern Vue project is with **Vite**.

You would run this command in your terminal:
```bash
npm create vite@latest contact-list-app -- --template vue
```
This command creates a new directory (`contact-list-app`) with a minimal, fast, and pre-configured Vue setup. After creation, navigate into the directory and install the dependencies:
```bash
cd contact-list-app
npm install
```

---

### Step 2: Understanding the Vite Project Structure

Vite's structure is clean and modern:
-   `index.html` is in the root directory.
-   `src/main.js` is the entry point for the application.
-   Components are written as Single-File Components (SFCs) with a `.vue` extension.
-   The `public/` directory is for static assets that don't get processed by the build tool.

To start the development server, you run `npm run dev`.

---

### Step 3: Creating the Static Data

Before building components, it's helpful to have some data to display.
-   Create a new file: `src/contactsData.js`.
-   In this file, create and export an array of contact objects, just like the one you see in the project.

---

### Step 4: Building the Components (Bottom-Up)

A good strategy is to build components from the smallest pieces upwards.

1.  **`ContactItem.vue`:** Create a component to display a single contact. It receives the contact data as a `prop` and emits a click event.
2.  **`SearchBar.vue`:** Create a component with a simple `<input>` field that emits an `input` event.
3.  **`ContactList.vue`:** Create a component that uses `v-for` to loop over an array of contacts and renders a `ContactItem` for each one.

---

### Step 5: Assembling the Main App Component (`App.vue`)

Now, put all the pieces together in `App.vue`.
1.  **Import everything:** Import the components and the contact data inside the `<script setup>` block.
2.  **Initial State:** Use `ref` to create reactive state variables for the search term and sort type.
3.  **Layout:** Add the components to the `<template>` section to create the basic layout. Bind the contact data to `ContactList` using props.

At this point, you would have a non-interactive app that displays the full list of contacts.

---

### Step 6: Adding Search Functionality

To make the search bar work, you need to:
1.  **Add State for Search:** In `App.vue`, create a `ref` for the search query.
    ```js
    const searchTerm = ref('');
    ```
2.  **Listen for Events:** Listen for the `search` event from the `SearchBar` component and update the `searchTerm` ref.
3.  **Create a Computed Property:** Create a `computed` property that filters the contact list based on the `searchTerm`.
    ```js
    const filteredContacts = computed(() => allContacts.value.filter(/*...*/));
    ```
4.  **Connect to the List:** Bind the `filteredContacts` computed property to the `ContactList` component.

---

### Step 7: Adding Optional Features (Sorting and Clicking)

To add the optional features, you would:

1.  **Implement Sorting:**
    -   Add a new `ref` in `App.vue` to track the sort order: `const sortType = ref('default');`
    -   Add buttons to the UI that call a method to update `sortType`.
    -   Expand the `computed` property: first filter, then sort the result based on `sortType`.

2.  **Implement Click-for-Details:**
    -   Create a handler method in `App.vue`: `const handleContactClick = (contact) => { ... }`.
    -   Listen for the `contactClick` event from the `ContactList` component.

---

### Step 8: Styling with a Dark Theme

The final step is to add CSS to make the application look good.
-   Define CSS variables for your color palette in `src/index.css`.
-   Apply a global dark background and text color to the `body`.
-   Style all components in `src/App.css` using the CSS variables for a consistent, modern, dark look.
-   Add `@media` queries to make the layout responsive.

And that's it! By following these steps, you can build a fully functional, interactive, and polished Vue application with Vite.
