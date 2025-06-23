import { useState } from 'react'


function App() {
  let [color, setColor] = useState('grey')

  return (
 <div className="w-full h-screen duration-200"
 style={{backgroundColor: color}} 
 >
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

   <div className="flex flex-wrap justify-center gap-3 shadow-lg
    bg-white px-3 py-3 rounded-3xl">test</div>
<button className='outline-none px-4 py-2 rounded-lg text-white font-semibold shadow-md'
 style={{backgroundColor: "Red"}}>
  Red
</button>

  </div>
 </div>

  )
  
}

export default App
