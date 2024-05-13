import { useState } from "react";
import { v4 as uuid } from "uuid";
import './TodoList.css'
import NewTodoForm from './NewTodoForm.jsx'
import Todo from './Todo'

function TodoList (){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        let newTodo = { ...todo, id: uuid()};
        setTodos(todos => [...todos, newTodo])
    }

    const removeTodo = (key) => {
        setTodos(todos.filter(todo => todo.id !== key))
    }

    const renderItems = () => {
        return (
            <>
                {todos.map(todo => (
                    <Todo task={todo.name} id={todo.id} removeTodo={evt => removeTodo(todo.id)}/> 
                ))}
            </>
        )
    }

    return (
        <div className='TodoList-container'>
            <p className="TodoList-header">Add To-Do</p>
            <NewTodoForm addTodo={ addTodo }/>
            <div className="TodoList-list">
              <p className='TodoList-header'>My To-Do List: </p>
                <ul>
                   { renderItems() } 
                </ul>  
            </div>
        </div>
    )
}

export default TodoList;