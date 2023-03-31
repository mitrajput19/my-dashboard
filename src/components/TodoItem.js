import React from 'react';

function TodoItem({ todo, handleDeleteTodo, handleCheckTodo, handleDragOver, handleDrop }) {
  const { _id, title, link, isDone } = todo;

  return (
    <li
      className={`${
        isDone ? 'line-through text-gray-400' : ''
      } hover:bg-gray-50 cursor-pointer px-4 py-4 sm:px-6`}
      draggable={true}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragStart={(e) => e.dataTransfer.setData('text/plain', _id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => handleCheckTodo(_id)}
            className="mr-2 h-5 w-5 text-blue-600"
          />
          <div className="text-sm">
            <a href={link} target="_blank" rel="noreferrer" className="font-medium text-gray-900">
              {title}
            </a>
          </div>
        </div>
        <div className="ml-2 flex-shrink-0">
          <button
            className="bg-gray-100 hover:bg-gray-200 rounded-md p-2"
            onClick={() => handleDeleteTodo(_id)}
            aria-label={`Delete ${title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
