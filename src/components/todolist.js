import React from "react";
//import components
import Todo from "./Todo";
const TodoList = ({todos, setTodos, filteredTodos}) =>{
    console.log(todos)
    return(

<div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo setTodos = {setTodos} todos = {todos  } key={todo.id} text={todo.text} todo={todo} id={todo.id} />
        ))}
      </ul>
    </div>
        
        );
};
export default TodoList;
