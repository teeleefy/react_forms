import { useState } from 'react'

import Box from './Box.jsx'
import BoxList from './BoxList.jsx'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <h1>Let's add some boxes!</h1>
      
      <BoxList/>
    </div>
  )
}

export default App
// height="50px" width="100px" color="magenta" 