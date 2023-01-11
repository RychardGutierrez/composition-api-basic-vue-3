import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default function useTodos() {
  const currentTab = ref('all');
  const store = useStore();
  const pendingTodos = computed(() => store.getters['pendingTodos']);
  // const allTodos = computed(() => store.getters['allTodos'])
  // const completedTodos = computed(() => store.getters['completedTodos'])

  const getTodosByTab = computed(() =>
    store.getters['getTodosByTab'](currentTab.value)
  );

  const onAllTask = () => {
    currentTab.value = 'all';
  };

  const onPending = () => {
    currentTab.value = 'pending';
  };

  const onCompleted = () => {
    currentTab.value = 'completed';
  };

  const toogleTodo = (id) => {
    store.commit('toogleTodo', id);
  };

  const createTodo = (text) => {
    store.commit('createTodo', text);
  };

  return {
    currentTab,
    getTodosByTab,
    onAllTask,
    onPending,
    onCompleted,
    toogleTodo,
    pendingTodos,
    createTodo,
  };
}
