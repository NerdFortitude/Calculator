import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Operations from './components/Operations'

function App() {
  

  const [expression,setExpression]  =useState("");
  const [result,setResult] = useState("");
  
  
  return (
    <div className='wrapper'>

      <div className='container'>

      <Operations expression={expression} setExpression={setExpression} result={result}></Operations>

      <Buttons expression={expression} setExpression={setExpression} result = {result} setResult={setResult}></Buttons>

      </div>
        
    </div>
  )
}

export default App
