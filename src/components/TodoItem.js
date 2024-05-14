// TodoItem.js - https://hashnode.com/@hugotav
import React from 'react'; //1

const TodoItem = ({ todo, toggleTodo }) => { //2
  const handleToggle = () => { //3
    toggleTodo(todo.id); //4
  };

  return ( //5, 6 e 7
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

export default TodoItem; //8