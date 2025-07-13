<template>
  <div v-if="advice" class="advice-box">
    🧠 Consejo del día: "{{ advice }}"
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const advice = ref('');

onMounted(async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  advice.value = data.slip.advice;
});
</script>

<style scoped>
.advice-box {
  margin-bottom: 1rem;
  font-style: italic;
  color: #2c3e50;
}
</style>
