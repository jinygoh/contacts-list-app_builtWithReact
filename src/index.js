/**
 * FILE: src/index.js
 * -----------------------------------------------------------------------------
 * DESCRIPTION:
 * This is the top-level entry point for the entire React application. Its primary
 * job is to render the main `App` component into the actual DOM in the browser.
 *
 * It acts as the bridge between the React component world and the HTML file
 * (`public/index.html`).
 *
 * RELATIONSHIP TO OTHER FILES:
 * - `public/index.html`: This file finds the `<div id="root"></div>` element
 *   in `index.html` and injects the entire React application into it.
 * - `src/App.js`: It imports the main `App` component and renders it.
 * - `src/index.css`: It imports global styles that apply to the entire application.
 */


import React from 'react';
// `ReactDOM` is a library that provides methods specifically for interacting
// with the DOM (the web page).
import ReactDOM from 'react-dom/client';

// Import global styles.
import './index.css';
// Import the main App component.
import App from './App';
// `reportWebVitals` is a function used for measuring app performance.
import reportWebVitals from './reportWebVitals';


// 1. Find the root DOM node.
// This line gets a reference to the `<div id="root">` element in `public/index.html`.
// This div is the container where our entire React app will live.
const rootElement = document.getElementById('root');

// 2. Create a React root.
// `ReactDOM.createRoot()` creates a new "root" for rendering the React app.
// This is part of the newer React 18 API, which enables concurrent features.
const root = ReactDOM.createRoot(rootElement);

// 3. Render the application.
// `root.render()` tells React to render our component tree into the root DOM node.
root.render(
  // `<React.StrictMode>` is a wrapper component that helps find potential
  // problems in an application. It activates additional checks and warnings
  // for its descendants. It does not render any visible UI and only runs in
  // development mode.
  <React.StrictMode>
    {/* This is where our application starts. We are telling React to render */}
    {/* the `App` component and all of its children. */}
    <App />
  </React.StrictMode>
);

// The `reportWebVitals` function can be used to measure the performance of your
// app. This is optional and can be removed.
reportWebVitals();
