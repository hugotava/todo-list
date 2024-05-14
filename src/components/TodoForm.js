// TodoForm.js - https://hashnode.com/@hugotav
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;

// import React, { useState } from 'react';: This line imports React and the useState hook from the React library. The useState hook is used to manage state within functional components.

// const TodoForm = ({ addTodo }) => {: This declares a functional component named TodoForm, which accepts a prop named addTodo. This prop is a function used to add a new todo item to the list.

// const [text, setText] = useState('');: This line uses the useState hook to create a state variable named text, which represents the value of the input field in the form. The initial state is an empty string. The setText function is used to update the value of text.

// const handleSubmit = (e) => { ... }: This defines a function handleSubmit which is triggered when the form is submitted. It prevents the default form submission behavior, checks if the input field is not empty, adds the new todo item using the addTodo function, and then resets the input field to an empty string.

// <form onSubmit={handleSubmit}>: This creates a form element with an onSubmit event handler set to handleSubmit, so that when the form is submitted, the handleSubmit function is called.

// <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new task" />: This creates a text input field. The value of the input is controlled by the text state variable. When the input value changes, the onChange event updates the text state using the setText function.

// <button type="submit">Add</button>: This creates a submit button for the form.

// export default TodoForm;: This exports the TodoForm component so that it can be imported and used in other parts of the application.