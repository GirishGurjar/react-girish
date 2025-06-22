import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('bg-white')

  return (
  <div className={`${color} h-screen flex items-center justify-center`} >
    <button onClick={() => setColor('bg-blue-500')}>Blue</button>
    <button onClick={() => setColor('bg-red-500')}>Red</button>
    <button onClick={() => setColor('bg-green-500')}>Green</button>
  </div>
  )
}

export default App
