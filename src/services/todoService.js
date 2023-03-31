import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data.todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, todo);
    return response.data.todo;
  } catch (error) {
    console.error('Error creating todo:', error);
  }
};

export const updateTodo = async (id, updates) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/todos/${id}`, updates);
    return response.data.todo;
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/todos/${id}`);
    return response.data.todo;
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

export const addTodo = async (title, link) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, { title, link });
      return response.data.todo;
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };