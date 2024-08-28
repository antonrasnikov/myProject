
import {useState} from "react"
import "./index.css";

export const Input = ({addTask}) => {
    const [newTask, setNewTask] = useState("")

    const modalWindow = () => {
        Swal.fire({
            title: 'Модальное окно',
            text: 'Задание добавлено',
            icon: 'success',
            confirmButtonText: 'ОК'
        });
    }
    
    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }

    const handleAddTask = () => {
        if(newTask.trim()!==""){
            addTask(newTask)
            setNewTask("")
            modalWindow()
        }
    }

    const pressEnter = (event) => {
        if(event.key==="Enter") {
            handleAddTask()
        }
        
    }
    return (
        <div className="input-container">
            <input onChange={handleInputChange}
            onKeyDown={pressEnter}
                type="text"
                placeholder="вапросы"
                className="mainInput"
                value={newTask}
            />
            <button className="add-button-style" onClick={handleAddTask}>Добавить задание</button>
        </div>
    );
}

