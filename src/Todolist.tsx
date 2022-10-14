import React, {useState} from "react";
import {FilterValuesType} from "./App";


type TaskType = {
    id:string
    title:string
    isDone:boolean
}


type PropsType = {
    title:string
    task:Array<TaskType>
    removeTask:(id:string) => void
    chengeFileter : (value : FilterValuesType) => void
    addTask: (title:string) => void
}

export function Todolist(props:PropsType) {


    let [title, setTitle] = useState("Bear")

    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}/>
                <button onClick={()=> props.addTask(title)} >+</button>
            </div>
            <ul>

                {
                    props.task.map( t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button className="buttonDell" type="button" onClick = {()=> props.removeTask(t.id)} >x</button>
                    </li>
                    )
                }

            </ul>
            <div>
                <button onClick={() => props.chengeFileter("all")}>All</button>
                <button onClick={()=> props.chengeFileter("active")} >Active</button>
                <button onClick = {()=> props.chengeFileter("completed")} >Completed</button>
            </div>
        </div>
    )
}


