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

const TaskList = () => {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState(getLocalStorageData())

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const addBtn = () => {
        setTasks([
            ...tasks, newTask
        ])
        setNewTask("")
    }

    const delBtn = (id) => {
        const filteredTasks = tasks.filter((value, key) => (
            key !== id
        ))
        setTasks(filteredTasks)
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log(tasks)
    },[tasks])

    return(
        <div className={TaskListStyle.container}>
            <div className={TaskListStyle.wrapper}>
                {
                    tasks.map((value, key) => {
                        return <Task text={value} del={() => delBtn(key)} key={key} />
                    })
                }
                <input type="text" value={newTask} onChange={e => handleChange(e)} />
                <button onClick={() => addBtn()}>add</button>
            </div>
        </div>
    )
}

export default TaskList