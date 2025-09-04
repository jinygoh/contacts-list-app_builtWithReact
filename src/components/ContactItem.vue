<template>
  <div class="contact-item" @click="onItemClick">
    <h3>{{ contact.name }}</h3>
    <p>{{ contact.phone }}</p>
    <p>{{ contact.email }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  contact: Object,
});

const emit = defineEmits(['itemClick']);

function onItemClick() {
  emit('itemClick', props.contact);
}
</script>
