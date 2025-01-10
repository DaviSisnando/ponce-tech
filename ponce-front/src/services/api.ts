import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    toast.error("Ocorreu um erro ao carregar os usuários");
  }
};

export const createUser = async (data: { name: string; email: string; birthdate: string; status: string; password: string }) => {
  try {
    const response = await api.post('/users', data);
    toast.success("Sucesso!");
    return response.data;
  } catch (error) {
    toast.error("Ocorreu um erro ao criar usuário");
  }
};

export default api;