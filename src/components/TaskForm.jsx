import { useState } from "react"

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) =>{
    setTask({
      ...task,
      [e.target.name]:[e.target.value]
    })
  }

  
  
  /* La propiedad onSubmit no solo es al enter, sino tambien al presionar un boton */
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(task);
  }
  return (
    <form onSubmit={handleSubmit}>

      <input name="title" type="text" placeholder="title" onChange={handleChange}/>

      <textarea name="description" placeholder="description" onChange={handleChange}>
      </textarea>
        <button>Save</button>
    </form>
  )
}