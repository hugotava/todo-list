// TodoItem.js
// TodoItem.js
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


// import React from 'react';: This line imports the React library, which is necessary for creating React components.

// const TodoItem = ({ todo }) => {: This declares a functional component named TodoItem, which accepts a prop named todo. This prop represents an individual todo item.

// <div className="todo-item">: This creates a <div> element with a CSS class of "todo-item", providing a container for the todo item.

// <input type="checkbox" checked={todo.completed} />: This creates a checkbox input field. The checked attribute is set based on the completed property of the todo item. If the todo item is completed, the checkbox will be checked; otherwise, it will be unchecked.

// <p>{todo.text}</p>: This displays the text content of the todo item inside a <p> element.

// export default TodoItem;: This exports the TodoItem component so that it can be imported and used in other parts of the application.