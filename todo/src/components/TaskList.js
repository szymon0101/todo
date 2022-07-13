import TaskListStyle from "./TaskList.module.css"

const TaskList = () => {
    return(
        <div className={TaskListStyle.container}>
            <div className={TaskListStyle.wrapper}>
                task list
            </div>
        </div>
    )
}

export default TaskList