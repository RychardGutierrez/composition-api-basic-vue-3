import axios from 'axios';

export const getUsersApi = async (page) => {
  const { data } = await axios.get(`https://reqres.in/api/users`, {
    params: { page },
  });

  return data;
};
