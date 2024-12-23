// import { useEffect } from "react";
import React, {useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoItem({ input, setInput, todos, setTodos,editTodo,setEditTodo}) {
 
  const updateTodo = (title, id, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodos);
    setEditTodo(null); // Exit editing mode
    setInput(""); // Clear input field after updating
  };
  


useEffect(() => {
  if (editTodo) {
    setInput(editTodo.title);
  } else {
    setInput("");
  }
}, [editTodo, setInput]);


const onInputChange=(event)=>{
  setInput(event.target.value);

};
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!editTodo){
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    }
   else{
    updateTodo(input,editTodo.id,editTodo.completed)
   }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter your Task"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit"> 
        {editTodo ?"ok":"Add"}
      </button>
    </form>
  );
}

export default ToDoItem;
