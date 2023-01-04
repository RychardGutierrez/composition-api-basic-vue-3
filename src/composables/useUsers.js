import { ref } from 'vue';
import { getUsersApi } from '../api/users';

export default function useUsers() {
  const users = ref([]);
  const isLoading = ref(true);
  const currentPage = ref(1);
  const errorMessage = ref('');

  const getUsers = async (page = 1) => {
    if (page <= 0) {
      page = 1;
    }

    isLoading.value = true;

    const data = await getUsersApi(page);

    isLoading.value = false;
    if (data.data.length > 0) {
      users.value = data.data;
      currentPage.value = page;
      return;
    }

    if (currentPage.value > 0) {
      errorMessage.value = 'No more users';
    }
  };

  getUsers();

  const nextPage = () => {
    getUsers(currentPage.value + 1);
  };

  const previousPage = () => {
    getUsers(currentPage.value - 1);
  };

  return {
    currentPage,
    errorMessage,
    isLoading,
    users,

    nextPage,
    previousPage,
  };
}
