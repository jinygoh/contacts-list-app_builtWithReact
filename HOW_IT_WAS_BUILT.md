# How This App Was Built: A Step-by-Step Guide (Angular Edition)

This document outlines the steps a developer would take to build this Contact List application from scratch using the Angular CLI.

---

### Step 1: Project Setup with Angular CLI

The best way to start a new Angular project is with the **Angular CLI**.

First, you would install the CLI globally:
```bash
npm install -g @angular/cli
```
Then, you would create a new project. For this app, we specified the name, requested no routing, and set the stylesheet format to CSS.
```bash
ng new contact-list-app --routing=false --style=css
```
This command creates a new directory (`contact-list-app`) with a well-structured, pre-configured Angular setup. After creation, you navigate into the directory and install the dependencies:
```bash
cd contact-list-app
npm install
```

---

### Step 2: Creating the Static Data Service

Before building components, it's best to have a way to manage your data. In Angular, this is typically done with a **service**.

-   Generate a new service using the CLI:
    ```bash
    ng generate service services/contact
    ```
-   In the generated `src/app/services/contact.service.ts` file, define a `Contact` interface and a private array of contact objects.
-   Create a public method, like `getContacts()`, to expose this data to the rest of the application.

---

### Step 3: Building the Components (Bottom-Up)

A good strategy is to build components from the smallest pieces upwards.

1.  **`ContactItemComponent`:** Create a component to display a single contact.
    ```bash
    ng generate component components/contact-item
    ```
2.  **`ContactListComponent`:** Create a component that will receive an array of contacts and render a `ContactItemComponent` for each one.
    ```bash
    ng generate component components/contact-list
    ```
3.  **`SearchBarComponent`:** Create a component with a simple `<input>` field for search.
    ```bash
    ng generate component components/search-bar
    ```

---

### Step 4: Assembling the Main App Component

Now, put all the pieces together in `app.component.ts` and `app.component.html`.

1.  **Import and Inject:** In `app.component.ts`, import the `ContactService` and inject it into the constructor.
2.  **Fetch Data:** In the `ngOnInit` lifecycle hook, call the service's `getContacts()` method to fetch the data.
3.  **Layout:** In `app.component.html`, add the component selectors (`<app-search-bar>`, `<app-contact-list>`) to build the layout.

At this point, you would have a non-interactive app that displays the full list of contacts.

---

### Step 5: Adding Search and Sort Functionality

To make the app interactive, you need to:
1.  **Add State:** In `app.component.ts`, add properties to hold the current `searchTerm` and `sortType`.
2.  **Handle Events:** Create methods in `app.component.ts` to update these state properties (e.g., `onSearchTermChange()` and `onSortChange()`).
3.  **Pass Data Down with `@Input`:** Use property binding `[contacts]="..."` to pass the list of contacts from `AppComponent` to `ContactListComponent`.
4.  **Send Events Up with `@Output`:** In `SearchBarComponent`, use an `EventEmitter` and the `@Output` decorator to notify `AppComponent` whenever the search text changes.
5.  **Derive the Filtered/Sorted List:** Create a method in `AppComponent` that takes the full contact list and applies the current search and sort criteria. This method is called whenever the state changes, ensuring the UI is always up-to-date.

---

### Step 6: Implementing Click-for-Details

To handle clicks on a contact:
1.  **Define the Handler:** Create a handler method in `AppComponent`: `onContactClick(contact) { ... }`.
2.  **Chain the Event:**
    -   `ContactItemComponent` uses `@Output` to emit an event when it's clicked.
    -   `ContactListComponent` listens for this event and passes it up to `AppComponent`.
    -   `AppComponent` listens for the event from `ContactListComponent` and calls its `onContactClick` handler.

---

### Step 7: Styling with a Dark Theme

The final step is to add CSS to make the application look good.
-   Define CSS variables for your color palette in the global `src/styles.css`.
-   Apply a global dark background and text color to the `body`.
-   Style all components in their own `.css` files for a consistent, modern, dark look.

And that's it! By following these steps, you can build a fully functional, interactive, and polished Angular application.
