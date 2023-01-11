<template>
  <button @click="onModal">New To do</button>

  <ModalVue v-if="isOpen" @onCloseModal="onModal">

    <template v-slot:header>
      <h2> Add To do </h2>
    </template>

    <template v-slot:content>
      <form @submit.prevent="onSubmit">
        <title>Text: </title>
        <input v-model="textToDo" type="text" name="text" id="text">
      </form>
    </template>

    <template v-slot:footer>
      <button @click="onSubmit">Save</button>
      <button @click="onModal">Exit</button>
    </template>
  </ModalVue>
</template>

<script setup>
import { ref } from 'vue';
import ModalVue from './Modal.vue';
import useTodos from "../composables/useTodos";
const isOpen = ref(false);
const textToDo = ref("");
const { createTodo } = useTodos()
const onModal = () => {
  isOpen.value = !isOpen.value;
}

const onSubmit = () => {
  createTodo(textToDo.value);
  textToDo.value = "";
  onModal();
}

</script>

<style scoped>

</style>