import React, { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchData();
  }, []);

  const handleAddTodo = async (title, link) => {
    const newTodo = await addTodo(title, link);
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = async (id, updates) => {
    const updatedTodo = await updateTodo(id, updates);
    const updatedTodos = todos.map((todo) => (todo._id === id ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Dashboard;
