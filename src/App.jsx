import react,{useState} from 'react';
import Header from "./components/Header";
import ToDoitem from './components/ToDoItem';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [editTodo, setEditTodo]=useState(null);
  

  return (
    <div className='container'> 
        <div className='app-wrapper'>

          <div>
            <Header />
          </div>

          <div>
            <ToDoitem
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}/>
          </div>

          <div>
            <ToDoList 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}/>
          </div>



        </div>

    </div>
   
  );
}

export default App;
