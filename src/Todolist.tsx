import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";


type TaskType = {
    id:string
    title:string
    isDone:boolean

}



type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTasks:(id:string) => void
    changeFileter:(value:FilterValuesType) => void
    addTask:(title:string) => void
}

export function Todolist(props:PropsType) {


    let [title, setTitle] = useState("")

    let addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    let onChandgeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    // @ts-ignore
    // let onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    //
    //     e.charCode === 13 ? addTask() : ""
    // }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value = {title} onChange={onChandgeHandler} onKeyPress={(e)=>  e.charCode === 13 ? addTask() : ""}  />
                <button onClick={addTask}>+</button>
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