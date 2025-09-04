<template>
  <div class="contact-list">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
      @itemClick="onItemClick"
    />
  </div>
</template>

<script setup>
import ContactItem from './ContactItem.vue';

const props = defineProps({
  contacts: Array,
});

const emit = defineEmits(['contactClick']);

function onItemClick(contact) {
  emit('contactClick', contact);
}
</script>
