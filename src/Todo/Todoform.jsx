import { useState } from "react";

export const Todoform = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = 
  useState({
    id: "", 
    content: "", 
    checked: false
  });

  const handleInputChange = (e) => {
    const value= e.target.value;
    setInputValue({ 
      id: Date.now(), 
      content: value, 
      checked: false 
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <form onSubmit={handleFormSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue.content}
        onChange={handleInputChange} // ✅ used here
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
};
