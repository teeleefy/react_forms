import './NewTodoForm.css'
import { useState } from "react";


function NewTodoForm ({ addTodo }){
  const INITIAL_STATE = { name: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send { name } to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };


    return (
        <>
        <form className="NewTodoForm" onSubmit={ handleSubmit }>
            <label htmlFor="todo-input">New To-Do Item: </label>
            <input 
                className="NewTodoForm-input" 
                id="todo-input" 
                name="name" 
                type='text' 
                value={formData.name} 
                onChange={ handleChange }>
            </input>
            <button className="NewTodoForm-btn" type='submit'>Add To-Do</button>
        </form>
       </> 
    )
}

export default NewTodoForm;