# Next.js Crash Course: A Tour of This Contact List App

Welcome to your personalized Next.js crash course! This guide will walk you through the fundamental concepts of Next.js and React, using the files in this very project as live examples.

---

## 1. What is Next.js?

Next.js is a **React framework**. It gives you the building blocks to create web applications. It handles the tooling and configuration needed for React, and provides a structure for your application.

**Key Idea:** Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

---

## 2. The `app` Directory: Routing and Layouts

In Next.js, the `app` directory is the heart of your application.

-   **`app/page.jsx`**: This is the main page of your application. It's the component that gets rendered when you visit the root of your site (e.g., `http://localhost:3000/`).
-   **`app/layout.jsx`**: This is a special component that wraps around your pages. It's used to define a consistent layout for your application, such as a header, footer, or in our case, the global styles.

**Dive into the code:**
-   Open `app/layout.jsx`. You'll see a simple component that imports the global CSS and wraps the `children` (which will be our page components) in an `<html>` and `<body>` tag.

---

## 3. Client Components: `"use client"`

By default, components in the Next.js `app` directory are **Server Components**. This means they are rendered on the server, which is great for performance. However, if you need to use features that only work in the browser, such as `useState` or `useEffect` for interactivity, you need to mark the component as a **Client Component**.

You do this by adding `"use client";` at the very top of the file.

**Example from `app/page.jsx`:**
```jsx
"use client";

import { useState } from 'react';
// ... the rest of the component
```
Our main page is a Client Component because it uses `useState` to manage the search term and sort type.

---

## 4. Components, Props, and State (The React Part)

The core of the application is still built with React components, props, and state.

-   **Components**: Reusable pieces of your UI. We have `ContactList`, `ContactItem`, and `SearchBar` in the `components/` directory.
-   **Props**: How you pass data from a parent to a child component. In `app/page.jsx`, we pass the `contacts` array and the `onContactClick` function as props to `ContactList`.
-   **State**: A component's memory. We use `useState` in `app/page.jsx` to keep track of the `searchTerm` and `sortType`.

**Dive into the code:**
-   Open `components/ContactItem.jsx`. It's a simple presentational component that receives a `contact` object as a prop and displays its details.

---

## 5. Handling Events and Lifting State Up

This concept is the same in Next.js as it is in React. To get data from a child component back up to a parent, you pass a function down as a prop.

**Example: The Search Bar**
1.  **`app/page.jsx` defines the state and the setter function:**
    ```jsx
    const [searchTerm, setSearchTerm] = useState('');
    ```
2.  **`app/page.jsx` passes the `setSearchTerm` function down to `SearchBar`:**
    ```jsx
    <SearchBar handleSearch={setSearchTerm} />
    ```
3.  **`components/SearchBar.jsx` calls the function when the input changes:**
    ```jsx
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={(e) => handleSearch(e.target.value)}
    />
    ```
When you type in the search bar, the `SearchBar` calls the `setSearchTerm` function, which updates the state in the parent `Home` component, causing it to re-render with the filtered list.

---

## 6. CSS Modules: Scoped Styles

Next.js has built-in support for CSS Modules. This is a way to write CSS that is scoped locally to a specific component. You create a file with the `.module.css` extension, and then import it into your component.

**Example from `app/page.jsx`:**
```jsx
import styles from './page.module.css';

// ...

return (
  <div className={styles.App}>
    {/* ... */}
  </div>
);
```
By using `styles.App`, you are using a class name that is unique to this component, which prevents styles from conflicting with each other.

---

This covers the key concepts you see in this Next.js app! By understanding the `app` directory, client components, and how React fundamentals fit into the Next.js framework, you have a great foundation for building powerful web applications.
