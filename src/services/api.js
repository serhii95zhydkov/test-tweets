import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6401af333779a862625b5408.mockapi.io/api/users',
});

export const getUsers = async () => {
  const { data } = await instance.get(`/`);
  return data;
};

export const updateUserById = async ({ id, followers }) => {
  const { data } = await instance.put(`/${id}`, { followers });
  return data;
};
