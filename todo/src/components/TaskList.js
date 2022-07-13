import { useEffect, useState } from "react"
import Task from "./Task"
import TaskListStyle from "./TaskList.module.css"

const getLocalStorageData = () => {
    const data = localStorage.getItem('tasks')
    if(data){
        return data
    }
    else{
        return []
    }
}

const TaskList = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState(getLocalStorageData())

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleClick = () => {
        setTasks([
            ...tasks, task
        ])
    }

    useEffect(() => {
        localStorage.setItem('tasks', tasks)
    },[tasks])

    console.log(tasks)

    return(
        <div className={TaskListStyle.container}>
            <div className={TaskListStyle.wrapper}>
                {
                    tasks.map((arg) => {
                        <Task>{arg}</Task>
                    })
                }
                <input type="text" value={task} onChange={e => handleChange(e)} />
                <button onClick={() => handleClick()}>add</button>
            </div>
        </div>
    )
}

export default TaskList