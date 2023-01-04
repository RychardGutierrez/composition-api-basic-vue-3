<template>
  <h1>Counter view</h1>
  <h2>{{ counter }}</h2>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script setup>
import { useCounter } from '@/composables/useCounter';

const { counter, increase, decrease } = useCounter(3);

</script>

<style scoped>

</style>