import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 class="text-3xl font-bold underline">Tailwind css</h1>
     <Card
       title="Card Title"
       description="This is a description of the card."
       imageUrl="https://via.placeholder.com/150"
     />
    </>
  )
}

export default App
