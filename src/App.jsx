import { useState } from 'react'
import './App.css'
import {useSelector} from 'react-redux'

function App() {
  
  const taskState = useSelector(state => state.tasks)

  console.log(taskState)
  


  return (
    <>
      <h1 className=" tracking-wide">Hola</h1>
    </>
  )
}

export default App
