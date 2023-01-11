import { createStore } from 'vuex';
import { v4 as uuid } from 'uuid';

export default createStore({
  state: {
    todos: [
      {
        id: '1',
        text: 'To recollect the stones of infinity',
        completed: false,
      },
      { id: '2', text: 'Soul stone ', completed: true },
      { id: '3', text: 'Power stone', completed: true },
      { id: '4', text: 'Reallity stone', completed: false },
    ],
  },
  mutations: {
    toogleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id == id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
    createTodo(state, text = '') {
      if (text.length <= 1) {
        return;
      }
      const todo = {
        id: uuid,
        completed: false,
        text,
      };
      state.todos.push(todo);
    },
  },
  actions: {},
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todo) => !todo.completed);
    },
    allTodos(state) {
      return state.todos;
    },
    completedTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'pending':
          return getters.pendingTodos;
        case 'completed':
          return getters.completedTodos;
        default:
          return getters.allTodos;
      }
    },
  },
  modules: {},
});
