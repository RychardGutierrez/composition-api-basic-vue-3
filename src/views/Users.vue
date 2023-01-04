<template>
  <h2 v-if="isLoading"> Wait please...</h2>

  <h2 v-else>Users</h2>

  <h5 v-if="errorMessage"> {{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="previousPage">Before</button>
  <button @click="nextPage">Next</button>
  <span>Pag: {{ currentPage }}</span>

</template>

<script setup>
import useUsers from "@/composables/useUsers";

const { currentPage, errorMessage, isLoading, users, nextPage, previousPage } = useUsers();

</script>

<style scoped>
h2,
h5 {
  padding-top: 2rem;
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>