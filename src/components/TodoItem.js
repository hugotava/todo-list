// TodoItem.js - https://hashnode.com/@hugotav
import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <p>{todo.text}</p>
    </div>
  );
};

export default TodoItem;