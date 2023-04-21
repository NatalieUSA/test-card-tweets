import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://642b4c71208dfe2547160104.mockapi.io/users',
});

export const getUsers = async () => {
  try {
    const { data } = await instance.get('/');
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
