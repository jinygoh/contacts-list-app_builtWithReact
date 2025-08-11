# The "Request-Response" Cycle in a React App

In a traditional web server, the "request-response" cycle is clear:
1.  **Request:** The browser sends an HTTP request to the server.
2.  **Response:** The server sends back an HTTP response.

In a frontend application like this React app, the cycle happens entirely in the user's browser. It's not about network requests, but about **user events and UI updates**.

Let's trace the two main cycles in this app.

---

## Cycle 1: Searching for a Contact

This cycle is initiated when the user types in the search bar.

### The "Request": User Types
1.  **User Action:** The user types a letter, say "a", into the `<input>` field.
2.  **Event Fired:** The browser fires an `onChange` event on that input element.

**File:** `src/components/SearchBar.js`
```jsx
<input onChange={e => handleSearch(e.target.value)} />
```

### The "Processing": State is Updated
3.  **Call the Handler:** The `onChange` handler calls `handleSearch("a")`. This is actually the `setSearchTerm` function from `App.js`.
4.  **State Update Scheduled:** Calling `setSearchTerm("a")` tells React to update the `searchTerm` state variable and schedule a re-render of the `App` component.

**File:** `src/App.js`
```jsx
const [searchTerm, setSearchTerm] = useState('');
...
<SearchBar handleSearch={setSearchTerm} />
```

### The "Response": UI is Re-Rendered
5.  **Component Re-renders:** The `App` component function runs again from top to bottom.
6.  **State is Derived:** During the render, the list of contacts to display is recalculated.
    - The `allContacts` list is filtered by the new `searchTerm` ("a").
    - The result is then sorted by the current `sortType`.
7.  **DOM is Updated:** The new, shorter, sorted list is passed as a prop to `ContactList`. React compares the new output with the old one and efficiently updates the browser's DOM to match.

**File:** `src/App.js`
```jsx
// This logic runs on every render
const filteredContacts = allContacts.filter(...);
const sortedAndFilteredContacts = [...filteredContacts].sort(...);
...
<ContactList contacts={sortedAndFilteredContacts} />
```

---

## Cycle 2: Sorting the Contact List

This cycle is initiated when the user clicks a sort button.

### The "Request": User Clicks
1.  **User Action:** The user clicks the "Name (A-Z)" button.
2.  **Event Fired:** The browser fires an `onClick` event on that button element.

**File:** `src/App.js`
```jsx
<button onClick={() => setSortType('name-asc')}>Name (A-Z)</button>
```

### The "Processing": State is Updated
3.  **Call the Handler:** The `onClick` handler calls `setSortType('name-asc')`.
4.  **State Update Scheduled:** This tells React to update the `sortType` state variable and schedule a re-render of the `App` component.

**File:** `src/App.js`
```jsx
const [sortType, setSortType] = useState('default');
```

### The "Response": UI is Re-Rendered
5.  **Component Re-renders:** The `App` component function runs again.
6.  **State is Derived:** The list of contacts is recalculated.
    - The `allContacts` list is filtered by the current `searchTerm`.
    - The result is then sorted by the new `sortType` ('name-asc'), re-ordering the list alphabetically.
7.  **DOM is Updated:** The newly sorted list is passed to `ContactList`. React updates the DOM to show the re-ordered contacts.

---

In both cycles, the pattern is the same:
1.  A user event updates a state variable.
2.  The state update causes a re-render.
3.  During the re-render, the UI is recalculated based on the new state.
4.  React updates the DOM.

This is the fundamental pattern for interactivity in React.
