<template>
  <h1>To Do List</h1>
  <h4> Tasks Pending: {{ pendingTodos.length }}</h4>
  <hr />

  <button :class="{ 'active': currentTab === 'all' }" @click="onAllTask">All</button>
  <button :class="{ 'active': currentTab === 'pending' }" @click="onPending">Pending</button>
  <button :class="{ 'active': currentTab === 'completed' }" @click="onCompleted">Completed</button>

  <div>
    <ul>
      <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed': todo.completed }"
        @dblclick="toogleTodo(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <NewTodo />

</template>

<script setup>
import useTodos from "../composables/useTodos";
import NewTodo from '../components/newTodo.vue';

const { currentTab, getTodosByTab, onAllTask, onPending, onCompleted, toogleTodo, pendingTodos } = useTodos();



</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: blueviolet;
  color: white;

}

.completed {
  text-decoration: line-through;
}

button {
  width: 100px;
  padding: 0.3rem;
  border: none;
  margin: 0.2rem;
}

button:hover {
  background-color: rgb(182, 180, 184);
}
</style>