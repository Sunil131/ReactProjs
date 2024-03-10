import { useState } from 'react'
import './App.css'
import Todos from '../components/Todos'
import AddToDo from '../components/AddToDo'

//https://github.com/hiteshchoudhary/chai-aur-react
//https://www.youtube.com/watch?v=1i04-A7kfFI 

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <AddToDo />
      <Todos />
    </>
  )
}

export default App
