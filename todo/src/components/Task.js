import TaskStyle from "./Task.module.css"

const Task = ({children}) => {
    return(
        <div className={TaskStyle.container}>
            <input type="checkbox" className={TaskStyle.checkbox} />
            <div className={TaskStyle.name}>
                {children}
            </div>
            <button className={TaskStyle.button}>
                delete
            </button>
        </div>
    )
}

export default Task