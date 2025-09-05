import {  useEffect, useState } from "react";
import { Todoform } from "./Todoform";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodo } from "./TodoLocalStorage";
import "./Todo.css";
import { setLocalStorageTodo } from "./TodoLocalStorage";

export const Todo = () => {
  
  const [task, setTask] = useState(()=>getLocalStorageTodo());
  
  // add data to localstorage
  useEffect(()=>{
    setLocalStorageTodo(task);
  },[task]);

  
  const handleFormSubmit = (inputValue) => {
    const {id, content, checked}=inputValue;

    //to check if the inputvalue content is empty or not
    if (!content.trim()) return;
  
    //to check if the data is already existing in the list or not 
    const ifTodoContentMatched = 
    task.find((curtask)=>curtask.content === content);

    if(ifTodoContentMatched) return;

    setTask([...task, {id, content,checked}]);
  };

  //Todo list element delete using handleDeleteTodo function

  const handleDeleteTodo=(value)=>{
    const updateTask= task.filter((curtask)=>curtask.content !== value);
    setTask(updateTask);
  };

// Todo list all items delete using  handleClearAll function

  const handleClearAll=()=>{
    setTask([]);
  };

  const handleCheckedTodo=(value)=>{
    const checkedTask=task.map((curtask)=>{
      if(curtask.content === value){
        return{...curtask,checked : !curtask.checked};
      }
      else{
        return curtask;
      }
    });
    setTask(checkedTask);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <TodoDate/>
      <Todoform onAddTodo={handleFormSubmit}/>

      <ul className="todo-list">
        {task.map((curtask) => (
          <TodoList 
            key={curtask.id}
            data={curtask.content}
            checked={curtask.checked}
            onHandleDeleteTodo={handleDeleteTodo}
            onHandleCheckedTodo={handleCheckedTodo}
          />
        ))}
      </ul>
      <section>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear all
        </button>
      </section>
    </div>
  );

};
