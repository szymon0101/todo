import TaskStyle from "./Task.module.css"

const Task = ({text, del}) => {
    return(
        <div className={TaskStyle.container}>
            <input type="checkbox" className={TaskStyle.checkbox} />
            <div className={TaskStyle.name}>
                {text}
            </div>
            <button className={TaskStyle.button} onClick={del}>
                delete
            </button>
        </div>
    )
}

export default Task