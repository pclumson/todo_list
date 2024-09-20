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

  const handleAddList = (index) => {

    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  };

  const handleListInputChange = (index, value) => {

    setListInputs({ ...listInputs, [index]: value });
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
            onChange={(e) => setHeadingInput(e.target.value)}
            />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
      </div>

      </div>

      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
          <div className="heading_todo">
          <h3>{todo.heading}</h3>
          <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
          </div>
          <ul>
          {todo.lists.map((list, listIndex) => (
            <li key={listIndex} className='todo_inside_list'>
            <p>{list}</p>
            </li>
          ))}
          </ul>
            <div className='add_list'>

              <input
              type="text"
              className="list-input"
              placeholder="Add List"
              value={listInputs[index] || ''}
              onChange={(e) => handleListInputChange(index, e.target.value)}
              />

            <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>

            </div>


        </div>

      ))}
      </div>
    </>
  );
};

export default TodoList;

/*
Mapping over Todos Array: todos.map((todo, index) => ...): Maps over the todos array, which contains todo items.The map() function executes the
specified function for each todo item in the array.
Rendering Todo Item: <div key={index} className="todo-card"> ... </div>: For each todo item, a div element with the class todo-card is rendered. The key
attribute is set to index to identify each to-do item within the list uniquely.
Displaying Todo Heading: <h3>{todo.heading}</h3>: Within each todo-card div, the heading of the current todo item is displayed using an <h3> element. The
heading text is retrieved from the heading property of the todo object.
Deleting Todo Item: <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>: Each todo item is
accompanied by a "Delete Heading" button. When clicked, this button triggers the handleDeleteTodo function, passing the index of the current todo item as an
argument. The index allows the function to identify and delete the corresponding todo item from the todos array.*/



