import React from "react";
import {FilterValuesType} from "./App";


type TaskType = {
    id:number
    title:string
    isDone:boolean
}



type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTasks:(id:number) => void
    changeFileter:(value:FilterValuesType) => void
}

export function Todolist(props:PropsType) {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>


                {
                    props.tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked = {t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => props.removeTasks(t.id)}>x</button>
                    </li>
                    )
                }


            </ul>
            <div>
                <button onClick={()=> props.changeFileter("all") } >All</button>
                <button  onClick={ () => props.changeFileter("active")} >Active</button>
                <button onClick={ ()=> props.changeFileter("completed")} >Completed</button>
            </div>
        </div>
    )

}