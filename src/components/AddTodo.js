import React, { useState } from 'react';

function AddTodo({ handleAddTodo }) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !link.trim()) return;
    handleAddTodo({
      title,
      link,
      isDone: false,
      position: 0,
    });
    setTitle('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mb-2">
        <label htmlFor="title" className="mr-2 font-bold">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-1/2"
        />
      </div>
      <div className="flex items-center mb-2">
        <label htmlFor="link" className="mr-2 font-bold">
          Link:
        </label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg w-1/2"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
