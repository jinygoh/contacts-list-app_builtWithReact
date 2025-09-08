# The "Request-Response" Cycle in an Angular App

In a traditional web server, the "request-response" cycle is about network communication. In a frontend framework like Angular, the cycle is about **user events and change detection**. It's the process of turning a user action into a UI update.

Let's trace the two main cycles in this app.

---

## Cycle 1: Searching for a Contact

This cycle is initiated when the user types in the search bar.

### The "Request": User Types
1.  **User Action:** The user types a letter, say "a", into the `<input>` field.
2.  **Event Fired:** The browser fires an `input` event on that element.

**File:** `src/app/components/search-bar/search-bar.html`
```html
<input (input)="onSearch($event)">
```

### The "Processing": State is Updated via Event Emitter
3.  **Call Child Handler:** The `(input)` binding calls the `onSearch()` method in `SearchBarComponent`.
4.  **Emit Event Up:** This method uses an `@Output()` property (an `EventEmitter`) to emit the input's value up to the parent component.
    **File:** `src/app/components/search-bar/search-bar.ts`
    ```typescript
    this.searchTermChange.emit(target.value);
    ```
5.  **Call Parent Handler:** In `AppComponent`, the event binding `(searchTermChange)` catches the event and calls the `onSearchTermChange("a")` method.
    **File:** `src/app/app.html`
    ```html
    <app-search-bar (searchTermChange)="onSearchTermChange($event)"></app-search-bar>
    ```
6.  **State Update:** The `onSearchTermChange` method updates the `searchTerm` property on `AppComponent` and then calls `updateFilteredContacts()`.

### The "Response": Change Detection and UI Update
7.  **Derive New State:** The `updateFilteredContacts()` method calculates a new `filteredContacts` array by filtering and sorting the master list based on the new `searchTerm`.
8.  **Change Detection:** Angular's change detection mechanism runs automatically. It sees that the `filteredContacts` array (which is bound to the `ContactListComponent`'s `[contacts]` input) has changed.
9.  **DOM is Updated:** Angular re-renders the necessary parts of the DOM. It updates the `*ngFor` in `ContactListComponent`, changing the `ContactItemComponent`s on the screen to match the new, shorter list.

---

## Cycle 2: Sorting the Contact List

This cycle is initiated when the user clicks a sort button.

### The "Request": User Clicks
1.  **User Action:** The user clicks the "Name (A-Z)" button.
2.  **Event Fired:** The browser fires a `click` event on that button element.

**File:** `src/app/app.html`
```html
<button (click)="onSortChange('name-asc')">Name (A-Z)</button>
```

### The "Processing": State is Updated
3.  **Call the Handler:** The `(click)` binding directly calls the `onSortChange('name-asc')` method in `AppComponent`.
4.  **State Update:** This method updates the `sortType` property on `AppComponent` and then calls `updateFilteredContacts()`.

### The "Response": Change Detection and UI Update
5.  **Derive New State:** The `updateFilteredContacts()` method recalculates the `filteredContacts` array. It filters by the current `searchTerm` and then sorts the result based on the new `'name-asc'` sort type.
6.  **Change Detection:** Angular's change detection sees that the `filteredContacts` array has changed.
7.  **DOM is Updated:** Angular updates the `ContactListComponent`, re-ordering the `ContactItemComponent`s in the DOM to reflect the newly sorted list.

---

In both cycles, the pattern is the same:
1.  A user event is captured via event binding `()`.
2.  A method on the component updates a property (the state).
3.  This triggers Angular's change detection.
4.  Angular updates any parts of the UI that are bound to the changed properties.
5.  The DOM is updated to reflect the new state.

This is the fundamental pattern for interactivity in Angular.
