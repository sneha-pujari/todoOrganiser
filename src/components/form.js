import React from "react";

const Form = ({setStatus, setInputText, todos, setTodos, inputText}) => {
    
    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    };

    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value); 
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()}
        ]);
        setInputText("")
    };
    return(

    <form>
      <input value = {inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick= {submitTodoHandler } className="todo-button" type="submit">
        <i className="fa fa-plus-square-o"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );

}

export default Form;    