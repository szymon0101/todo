import TaskStyle from "./Task.module.css"

const Task = ({text, del, check, done}) => {
    return(
        <div className={TaskStyle.container}>
            <input type="checkbox" className={TaskStyle.checkbox} onChange={check} checked={done}/>
            <div className={TaskStyle.text}>
                {text}
            </div>
            <button className={TaskStyle.button} onClick={del}>
                <div className={`${TaskStyle.xlines} ${TaskStyle.line1}`} />
                <div className={`${TaskStyle.xlines} ${TaskStyle.line2}`} />
            </button>
        </div>
    )
}

export default Task