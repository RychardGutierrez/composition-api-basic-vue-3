<template>
  <ul>
    <!-- <li v-for="{ first_name, last_name, email, id } in users" :key="id">
      <h4>{{ first_name }} {{ last_name }}</h4>
      <h6>{{ email }}</h6>
    </li> -->
    <slot v-for="user in users" :key="user.id" :user="user"></slot>
  </ul>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  users: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>
ul {
  list-style: none;
}
</style>