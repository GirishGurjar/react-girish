import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObject = {
  name: "John",
  age: 30,
  city: "New York"
}
let newArray = [1, 2, 3, 4, 5];
  return (
    <>
     <h1 className="text-3xl font-bold underline">Tailwind css</h1>
     <Card username="Girish" btnText="click me" />
     <Card username="Gurjar" btnText="read me" />
    </>
  )
}

export default App
