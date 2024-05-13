import './Todo.css'



function Todo({id, task, removeTodo}){
    return(
        <div>
           
            <li key={ id }>
                    { task } 
               
               <button className='Todo-btn' onClick={removeTodo}>X</button>      
            </li>
         </div>
    )
}

export default Todo;