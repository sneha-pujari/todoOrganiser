import React, { useState, useEffect } from "react";
import './App.css';
//Importing components
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {
  
  //state
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const[filteredTodos, setFilteredTodos] = useState([]);
  
//useEffect
useEffect(()=>{
  filterHandler();
  }, [todos, status]);
  
  //functions
  const filterHandler = () =>{
  switch(status){
    case 'completed' :
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted' :
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos);
        break; 
  }
  };

  return (
    <div className="App">
     <nav className="navigation container">
        <div className="nav-brand">todo organiser</div>
        <ul className="list-non-bullet nav-pills">
            <li className="list-item-inline">
                <a className="link link-active" href="#transla"></a>
            </li>
            <li className="list-item-inline">
                <a className="link" href="#socm"></a>
            </li>
            
        </ul>
    </nav>

    <header className="hero">
        {/* <img className="hero-img" src="hero.png" /> */} 
        <h1 className="hero-heading">Let's get this done!</h1>
       
          {/* <span className="heading-inverted"></span> */}
        
    </header>
  <Form filteredTodos={filteredTodos} setStatus={setStatus} inputText = {inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText} />
  <TodoList filteredTodos={filteredTodos} setTodos = {setTodos} todos = {todos}/>
    </div>
  );
}

export default App;
