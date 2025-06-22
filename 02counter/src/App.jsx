import { useState } from 'react'

import './App.css'

function App() {
 
 let [counter, setCounter] = useState(5)


 // let counter   =  5;

const addValue = () => {

if (counter < 20) {
  setCounter(counter + 1)
}

}


  const removeValue = () => {
if (counter > 0) {
    setCounter(counter - 1)
  }
}

  return (
    <>
     <h2>GIRISH OR REACT</h2>

     <h2>Counter value: {counter}</h2>

     <button class="btn" onClick={addValue}> Add value{counter}</button>
    <br />
     <button  class="btn" onClick={removeValue}>subtract value {counter}</button>
     <p>footer :{counter}</p>

    </>
  )
}

export default App
