<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="onChangeTitle"> Change title </button>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

const title = ref("This is an about page");

const onChangeTitle = () => {
  title.value = "New title";
}

onBeforeMount(() => {
  console.log("BeforeMount");
});

onMounted(() => {
  console.log("OnMounted")
})
onUpdated(() => {
  console.log("Update")
})
// onUnmounted()
// onBeforeMount()
onBeforeUpdate(() => {
  console.log("onbefore Update")
})
// onBeforeUnmount()

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
