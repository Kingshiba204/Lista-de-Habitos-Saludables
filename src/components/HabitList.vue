<template>
  <ul>
    <li v-for="habit in habits" :key="habit.id">
      <input type="checkbox" v-model="habit.done" @change="update" />
      <span :style="{ textDecoration: habit.done ? 'line-through' : 'none' }">
        {{ habit.text }}
      </span>
      <button @click="remove(habit.id)">Eliminar</button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['habits']);
const emit = defineEmits(['update']);

function remove(id) {
  const filtered = props.habits.filter(h => h.id !== id);
  emit('update', filtered);
}

function update() {
  emit('update', props.habits);
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
