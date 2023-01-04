<template>
  <h1>Search pokemon: {{ pokemonId }}</h1>

  <form @submit.prevent="onSubmit">
    <input v-model="pokemonId" type="number" name="searchPokemon" id="searchPokemon" placeholder="Pokemon number"
      ref="txtSearchId" />
  </form>
  <br />
  <span>Enter to seach</span>
</template>

<script setup>
import { ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const pokemonId = ref(1);
const txtSearchId = ref();

const onSubmit = () => {
  router.push({
    name: 'pokemon-id', params: {
      id: pokemonId.value
    }
  })
}

onActivated(() => {
  txtSearchId.value.select();
})

</script>

<style lang="scss" scoped>

</style>
