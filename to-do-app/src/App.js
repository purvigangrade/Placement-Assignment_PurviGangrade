import "./App.css";
import React, { useReducer, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const todoReducer = (todos, action) => {

switch (action.type) {
  case "ADD-TODO":
    return [ ...todos, {id: uuidv4(), text: action.payload, completed: false  }];

  case "DELETE-TODO":
    return todos.filter((item => item.id !== action.payload))

  case "EDIT-TODO":
    return todos.map((item => item.id === action.payload.id ? {...item, text: action.payload.text} : item ))

  case "TOGGLE-TODO":
    return todos.map((item => item.id === action.payload ? {...item, completed: !item.completed}
      :item
    ));
  default:
    break;
}
}


function App() {
const [todos, dispatch] = useReducer(todoReducer, []);
const [newTodo, setNewTodo] = useState('');
const [isEditing, setIsEditing] = useState(null);

const handleSubmit = (e) => {
e.preventDefault();
if (isEditing){
  dispatch({type : "EDIT-TODO" , payload: {id: isEditing.id, text: newTodo}});
  setIsEditing(null);
} else{
  handleAdd();
}
setNewTodo('');


}

//Add new Todo
const handleAdd = () => {
  dispatch({ type: "ADD-TODO", payload: newTodo});
  setNewTodo('');
};

//Delete Todo
const handleDelete = (id) => {
  dispatch({ type: "DELETE-TODO", payload: id});
}

//Edit TODO
const handleEdit = (item) => {
setNewTodo(item.text);
setIsEditing(item);
}

//Toggle TODO
const handleToggle = (id) =>{
dispatch({type: "TOGGLE-TODO", payload: id });
}
 
  return (
    <div className="App">
      <h1 className="text-4xl text-white font-bold py-4">To Do App List</h1>
      <form onSubmit={handleSubmit} className="max-w-lg w-full mt-10 mx-auto pl-12">
        <div className="flex items-center gap-4">
          <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} 
            type="text"
            className="py-3 px-5 w-full text-black outline-none rounded-md"
            placeholder="Enter your Todo...."
          ></input>
          <span 
          onClick={handleAdd}
          className="py-3 px-5 font-semibold rounded-md bg-blue-500 cursor-pointer">
            Add
          </span>
        </div>
        <ul className="flex flex-col gap-4 mt-10">
        {todos.length <= 0 && 
          <div className="text-red-200 font-medium text-xl TEXT-CENTER">THERE IS NO TODO'S HERE.....</div>
        }
        {todos.map((item) => (
          <li 
          key={item.id}
          className="flex items-center p-3 rounded-md transition-all hover:bg-black hover:bg-opacity-50  justify-between">
            <div className="flex items-center gap-3">
              <input
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
              className="w-5 h-5" type="checkbox"></input>
              <span className={`${item.completed ? "line-through" : ""}`}>{item.text}</span>
            </div>
            <div className="flex items-center gap-2">
              <span onClick={() => handleEdit(item)} className="w-6 h-6 flex items-center justify-center bg-blue-200 rounded-full text-blue-500 cursor-pointer">
                <AiFillEdit />
              </span>
              <span onClick={() => handleDelete(item.id)} className="w-6 h-6 flex items-center justify-center bg-red-200 rounded-full text-red-500 cursor-pointer">
                <AiFillDelete />
              </span>
            </div>
          </li>
  ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
