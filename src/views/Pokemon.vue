<template>
  <h1 v-if="!isLoading && !errorMessage">Search...</h1>
  <h1 v-else-if="errorMessage"> {{ errorMessage }}</h1>
  <template v-if="pokemon">
    <h1>Pokemon Page {{ router.params.id }}</h1>
    <h3>{{ pokemon.name }} </h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">

    <br />
    <router-link :to="{ name: 'pokemon-search' }"> Back </router-link>
  </template>

</template>

<script setup>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import usePokemon from '@/composables/usePokemon';
import { watch } from 'vue';

const router = useRoute();
const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(router.params.id);

watch(() => router.params.id, () => {
  searchPokemon(router.params.id)
});

onBeforeRouteLeave(() => {
  const answer = window.confirm("Are you sure you want to leave?")
  if (!answer) {
    return false;
  }
})
</script>

<style lang="scss" scoped>

</style>