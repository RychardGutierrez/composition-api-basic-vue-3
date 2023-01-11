<template>
  <h1>Learning Slots</h1>
  <button @click="onModal">Open modal</button>

  <ModalVue v-if="isOpen" @onCloseModal="onModal">
    <template v-slot:content>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ullam. Doloremque ipsam amet, possimus quis
        earum quibusdam</p>
    </template>

    <template v-slot:header>
      <h2> Title modal </h2>
    </template>

    <template v-slot:footer>
      <button @click="onModal">Exit</button>
    </template>
  </ModalVue>
</template>

<script setup>
import { ref } from 'vue';
import ModalVue from '../components/Modal.vue';
const isOpen = ref(false);

const onModal = () => {
  isOpen.value = !isOpen.value;
}

</script>

<style scoped>

</style>