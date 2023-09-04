import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Operations from './components/Operations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>

      <div className='container'>

      <Operations></Operations>

      <Buttons></Buttons>

      </div>
        
    </div>
  )
}

export default App
