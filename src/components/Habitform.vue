<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="habitText" placeholder="Nuevo hábito" required />
    <button type="submit">Agregar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-habit']);
const habitText = ref('');

function handleSubmit() {
  if (habitText.value.trim()) {
    emit('add-habit', { id: Date.now(), text: habitText.value, done: false });
    habitText.value = '';
  }
}
</script>

<style scoped>
form {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}
</style>
