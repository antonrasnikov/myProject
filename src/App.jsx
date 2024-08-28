import { useState } from 'react'
import { Input } from "./components/Input/index.jsx"
import { HeaderTitle } from "./components/Header/index.jsx"
import { List } from "./components/List/index.jsx"
import { TrashButton } from "./components/TrashButton/index.jsx"
import "./App.css"
import Swal from 'sweetalert2'

export const App = () => {
    const [tasks, setTasks] = useState([]) 

    const addTasks = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const deleteTrash = () => {
        setTasks([])
    }

    return (
        <div>
            <HeaderTitle />
            <List tasks={tasks} deleteTask={deleteTask} />
            <Input addTask={addTasks} />
            <TrashButton deleteTrash={deleteTrash}/>
        </div>
    )
}


