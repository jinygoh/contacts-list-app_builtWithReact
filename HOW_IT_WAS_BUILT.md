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

Create React App provides a default template with a spinning React logo. The next step is to remove the boilerplate code you don't need.

-   Delete `src/logo.svg`.
-   Clean up `src/App.js` to be a simple, empty component.
-   Remove the boilerplate styles from `src/App.css`.

---

### Step 3: Creating the Static Data

Before building components, it's helpful to have some data to display.

-   Create a new file: `src/contactsData.js`.
-   In this file, create and export an array of contact objects, just like the one you see in the project. Each object should have a unique `id`, `name`, `phone`, and `email`.

---

### Step 4: Building the Components (Bottom-Up)

A good strategy is to build components from the smallest, most self-contained pieces upwards.

1.  **`ContactItem.js`:**
    -   Create `src/components/ContactItem.js`.
    -   Create a simple functional component that receives a single `contact` object as a prop.
    -   Add JSX to display the contact's name, phone, and `email`.

2.  **`ContactList.js`:**
    -   Create `src/components/ContactList.js`.
    -   This component will receive an array of `contacts` as a prop.
    -   Use the `.map()` method to iterate over the `contacts` array and render a `ContactItem` for each one. Remember to add the `key` prop!

3.  **`SearchBar.js`:**
    -   Create `src/components/SearchBar.js`.
    -   Add a simple `<input>` field. For now, it won't do anything.

---

### Step 5: Assembling the Main App Component (`App.js`)

Now it's time to put all the pieces together in `App.js`.

1.  **Import Components:** Import `ContactList` and `SearchBar` into `App.js`.
2.  **Import Data:** Import the `contacts` data from `src/contactsData.js`.
3.  **Initial State:** Use the `useState` hook to store the list of contacts.
    ```jsx
    const [allContacts] = useState(contactsData);
    ```
4.  **Layout:** Add the imported components to the `return` statement of `App.js` to create the basic layout. Pass the contact data to `ContactList`.
    ```jsx
    <div className="App">
      <h1>Contact List</h1>
      <SearchBar />
      <ContactList contacts={allContacts} />
    </div>
    ```
At this point, you would have a non-interactive app that displays the full list of contacts.

---

### Step 6: Adding Search Functionality (State and Effects)

This is the final and most complex part, involving state management and effects.

1.  **Add State for Search:** In `App.js`, add two more `useState` hooks:
    -   One for the `searchTerm` (the text in the input).
    -   One for the `filteredContacts` (the list that will be displayed).
    ```jsx
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(allContacts);
    ```

2.  **Lift State Up:** Pass the `setSearchTerm` function down to the `SearchBar` as a prop (`handleSearch`). In `SearchBar`, call this function in the `onChange` event handler of the input.

3.  **Create the Filtering Logic:** In `App.js`, use the `useEffect` hook.
    -   This effect will have `searchTerm` as a dependency.
    -   Inside the effect, write the logic to filter `allContacts` based on the `searchTerm`.
    -   Call `setFilteredContacts` with the result of the filtering.

4.  **Connect to the List:** In the JSX of `App.js`, make sure you are passing the `filteredContacts` (the state variable) to `ContactList`, not the original `allContacts`.

---

### Step 7: Styling

The final step is to add CSS to make the application look good. This would involve adding styles to `App.css` and `index.css` to style the components, layout, and typography.

And that's it! By following these steps, you can build a fully functional, interactive React application.
