import { useEffect, useState } from "react"
import Task from "./Task"
import TaskListStyle from "./TaskList.module.css"

const getLocalStorageData = () => {
    const data = localStorage.getItem('tasks')
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}

const initialState = {
    text: "",
    done: false
}

const TaskList = () => {
    const [newTask, setNewTask] = useState(initialState)
    const [tasks, setTasks] = useState(getLocalStorageData())

    const handleChange = (e) => {
        setNewTask({
            text: e.target.value,
            done: false
        })
    }

    const addBtn = () => {
        if(newTask.text !== ""){
            setTasks([
                ...tasks, newTask
            ])
            setNewTask(initialState)
        }
    }

    const check = (id) => {
        const updatedTasks = tasks.map((value, key)=>{
            if(key === id){
                value.done = !value.done
            }
            return value
        })
        setTasks(updatedTasks)
    }

    const delBtn = (id) => {
        const filteredTasks = tasks.filter((value, key) => {
            return key !== id
        })
        setTasks(filteredTasks)
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    return(
        <div className={TaskListStyle.container}>
            <div className={TaskListStyle.wrapper}>
                { 
                    tasks.length ? (
                        tasks.map((value, key) => {
                            return <Task text={value.text} check={() => check(key)} del={() => delBtn(key)} done={value.done} key={key} />
                        })
                    ) : "tasks list empty"
                }
                <div className={TaskListStyle.createContainer}>
                    <input type="text" value={newTask.text} onChange={e => handleChange(e)} className={TaskListStyle.input} placeholder="new task"/>
                    <button onClick={() => addBtn()} className={TaskListStyle.btn}>add new task</button>
                </div>
            </div>
        </div>
    )
}

export default TaskList