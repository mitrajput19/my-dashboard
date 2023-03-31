import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleDeleteTodo, handleCheckTodo, handleDragDrop }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const itemId = e.dataTransfer.getData('text/plain');
    handleDragDrop(itemId, todos.length);
  };

  return (
    <ul className="bg-white shadow overflow-hidden rounded-md divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </ul>
  );
}

export default TodoList;
