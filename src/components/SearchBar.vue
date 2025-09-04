<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search by name..."
      @input="onInput"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['search']);

function onInput(event) {
  emit('search', event.target.value);
}
</script>
