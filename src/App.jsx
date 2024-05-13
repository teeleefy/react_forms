import BoxList from './boxes/BoxList.jsx'
import TodoList from './todos/TodoList.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App-container" id="box">
        <h1>Add a Box!</h1>
        <BoxList/>
        </div>
      <div className="App-container" id="todo">
        <TodoList/>
      </div>
      
    </div>
  )
}

export default App
