import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

  // todos: To represent an array of todo items. Initialize it with an empty array [], indicating that there are no todo items initially.
  // headingInput: To represent the value entered by user into an input field for adding a new heading for a todo item. Initialize it as an empty string ''.
  // listInputs: Initialize listInputs as an empty object {}. This state will hold the value of input fields for each todo item individually.

  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

//   const handleAddTodo = () => { ... }: Declares a constant named handleAddTodo and assigns it an arrow function.
//   if (headingInput.trim() !== '') { ... }: Checks if the headingInput variable, a piece of text input from the user, is empty after trimming any whitespace
//     characters from the beginning and end. This condition ensures that the user has entered some content before proceeding.
//     setTodos([...todos, { heading: headingInput, lists: [] }]);: If the condition in the if statement is met, this line updates the state variable todos. It spreads
//     the existing todos array (todos) into a new array using the spread syntax (…todos) and appends a new object to it. The new object contains a heading property
//     set to the value of headingInput and a lists property initialized as an empty array.
//     setHeadingInput('');: After adding a new todo item, this line clears the headingInput state variable, resetting the text input field for the user to enter a new
//     todo item heading.


  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  };


  

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"

            value={headingInput}

            onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
          />

          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>

        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;





