<template>
  <h2 v-if="isLoading"> Wait please...</h2>

  <h2 v-else>Users</h2>

  <h5 v-if="errorMessage"> {{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <UserList :users="users" v-slot="{ user }">
      <h5>{{ user.first_name }} {{ user.last_name }}</h5>
      <span>{{ user.email }}</span>
    </UserList>
  </div>

  <button @click="previousPage">Before</button>
  <button @click="nextPage">Next</button>
  <span>Pag: {{ currentPage }}</span>

</template>

<script setup>
import useUsers from "@/composables/useUsers";
import UserList from "../components/UserList.vue";

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