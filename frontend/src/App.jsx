import { useState } from 'react'
import './App.css'
import NewNote from './Pages/NewNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <NewNote/>
    </div>
  )
}

export default App
