<template>
  <div class="app">
    <h1>Control de Hábitos Saludables</h1>
    <AdviceBox />
    <HabitForm @add-habit="addHabit" />
    <HabitList :habits="habits" @update="updateHabits" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HabitForm from './components/HabitForm.vue';
import HabitList from './components/HabitList.vue';
import AdviceBox from './components/AdviceBox.vue';
import { getHabits, saveHabits } from './services/habitService.js';

const habits = ref([]);

onMounted(() => {
  habits.value = getHabits();
});

function addHabit(habit) {
  habits.value.push(habit);
  saveHabits(habits.value);
}

function updateHabits(newHabits) {
  habits.value = newHabits;
  saveHabits(habits.value);
}
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  padding: 2rem;
  max-width: 700px;
  margin: auto;
}
</style>
