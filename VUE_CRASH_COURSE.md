# Vue Crash Course: A Tour of This Contact List App

Welcome to your personalized Vue crash course! This guide will walk you through the fundamental concepts of Vue 3, using the files in this very project as live examples.

---

## 1. What is Vue?

Vue is a JavaScript framework for building user interfaces (UIs). It's designed to be approachable and flexible. Vue lets you build your UI out of reusable pieces called **components**.

**Key Idea:** Build small, reusable components, then put them together like LEGO bricks.

---

## 2. Single-File Components (SFCs)

In Vue, components are typically defined in `.vue` files, also known as Single-File Components (SFCs). An SFC contains the component's HTML, JavaScript, and CSS all in one file.

-   `<template>`: The HTML structure of the component.
-   `<script setup>`: The JavaScript logic for the component.
-   `<style>`: The CSS styles for the component.

**Dive into the code:**
- Open `src/components/ContactItem.vue`. You'll see these three sections, defining a **presentational component**—its only job is to display data.

---

## 3. The Template Syntax

Vue's template syntax looks like HTML, but with special features. You can use it to declaratively render data to the DOM.

**Example from `src/components/ContactItem.vue`:**
```vue
<template>
  <!-- Use `@` as a shorthand for `v-on:` to listen for DOM events. -->
  <div class="contact-item" @click="onItemClick">
    <!-- Use double curly braces `{{ }}` for text interpolation (mustaches). -->
    <h3>{{ contact.name }}</h3>
    <p>{{ contact.phone }}</p>
    <p>{{ contact.email }}</p>
  </div>
</template>
```

---

## 4. Props: Passing Data to Components

How do you get data into a component? You pass it down from a parent component using **props**.

**Example from `src/App.vue` and `src/components/ContactList.vue`:**

1.  In `App.vue`, we render `ContactList` and use the `v-bind:` directive (shorthand `:`) to pass the list of contacts.
    ```vue
    <!-- in App.vue -->
    <ContactList :contacts="sortedAndFilteredContacts" ... />
    ```

2.  In `ContactList.vue`, we declare the props it expects using `defineProps`.
    ```js
    // in ContactList.vue, inside <script setup>
    const props = defineProps({
      contacts: Array,
    });
    ```
The component can now access the contacts array via `props.contacts`.

---

## 5. Reactive State with `ref`

What if a component needs to remember something that can change over time? For this, we use **reactive state**. In the Composition API, the most common way to do this is with `ref`.

**Example from `src/App.vue`:**
```js
// in App.vue, inside <script setup>
import { ref } from 'vue';

// Create reactive variables for the search text and sort order.
const searchTerm = ref('');
const sortType = ref('default');
```
When you change the `.value` of a `ref` (e.g., `searchTerm.value = 'new value'`), Vue automatically detects the change and updates the parts of the DOM that depend on it.

---

## 6. Events: Communicating from Child to Parent

How does a child component tell a parent component that something happened? It **emits an event**.

**Example 1: The Search Bar**
-   In `SearchBar.vue`, we use `defineEmits` to declare the events it can emit. When the user types, we emit a `search` event with the input's value.
    ```js
    // in SearchBar.vue
    const emit = defineEmits(['search']);
    emit('search', event.target.value);
    ```
-   In `App.vue`, we listen for that event using `v-on:` (shorthand `@`).
    ```vue
    <!-- in App.vue -->
    <SearchBar @search="handleSearch" />
    ```

**Example 2: Clicking a Contact Item**
The `handleContactClick` function in `App.vue` is triggered when `ContactItem.vue` emits an `itemClick` event, which is then passed up through `ContactList.vue`.

---

## 7. Computed Properties for Derived State

Instead of creating more state variables for filtered or sorted lists, we can calculate them on-the-fly using **computed properties**. A computed property automatically updates whenever its dependencies (the `refs` it uses) change.

**Why is this better?**
-   It's more declarative and easier to read.
-   It prevents bugs where state can get out of sync.
-   Vue caches the result and only re-calculates it when needed, making it very efficient.

**Example from `src/App.vue`:**
```js
// in App.vue
import { computed } from 'vue';

// 1. This computed property depends on `allContacts`, `searchTerm`, and `sortType`.
const sortedAndFilteredContacts = computed(() => {
  // 2. Filter first, based on the searchTerm ref.
  const filtered = allContacts.value.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );

  // 3. Then, sort the result of the filtering, based on sortType ref.
  const sorted = [...filtered].sort((a, b) => {
    if (sortType.value === 'name-asc') { /*...*/ }
    if (sortType.value === 'name-desc') { /*...*/ }
    return 0;
  });

  return sorted;
});

// 4. Finally, bind the result to the list component in the template.
// <ContactList :contacts="sortedAndFilteredContacts" ... />
```
This flow is predictable and easy to follow. The UI is always a direct result of the current state.

---

This covers all the core concepts you see in action in this app! By understanding SFCs, props, events, `ref`, and `computed`, you have the foundation for building almost anything in Vue.
