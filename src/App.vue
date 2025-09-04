<template>
  <div id="app" class="App">
    <header class="App-header">
      <h1>Contact List</h1>
    </header>
    <main>
      <SearchBar @search="handleSearch" />
      <div class="sort-controls">
        <span>Sort by:</span>
        <button @click="setSortType('name-asc')">Name (A-Z)</button>
        <button @click="setSortType('name-desc')">Name (Z-A)</button>
        <button @click="setSortType('default')">Default</button>
      </div>
      <ContactList
        :contacts="sortedAndFilteredContacts"
        @contactClick="handleContactClick"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { contacts as contactsData } from './contactsData.js';
import ContactList from './components/ContactList.vue';
import SearchBar from './components/SearchBar.vue';

const allContacts = ref(contactsData);
const searchTerm = ref('');
const sortType = ref('default');

const sortedAndFilteredContacts = computed(() => {
  const filtered = allContacts.value.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortType.value === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortType.value === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return sorted;
});

function handleSearch(term) {
  searchTerm.value = term;
}

function setSortType(type) {
  sortType.value = type;
}

function handleContactClick(contact) {
  alert(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
}
</script>

<style>
@import './App.css';
</style>
