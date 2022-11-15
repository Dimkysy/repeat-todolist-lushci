import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string, todolistId:string) => void
    changeFileter: (value: FilterValuesType, todolistId:string) => void
    addTask: (title: string, todolistId:string) => void
    changeStatus:(id:string, isDone:boolean, todolistId:string) => void
    filter: string
    id:string
    removeTodolist:(todolistId:string)=> void
}

export function Todolist(props: PropsType) {


    let [title, setTitle] = useState("")

    let [error, setError] = useState< string | null >(null)

    let addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title, props.id)
            setTitle("")
        } else {
            setError("Title is require")
        }
    }

    let onChandgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    //@ts-ignore
    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }

    let onAllClickHandler = () => props.changeFileter("all", props.id)
    let onActiveClickHandler = () => props.changeFileter("active", props.id)
    let onCompletedClickHandler = () => props.changeFileter("completed", props.id)
    let removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    return (
        <div>
            <h3>{props.title} <button onClick={removeTodolist}>x</button></h3>
            <div>
                <input value={title} onChange={onChandgeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
                {error && <div className ="error-message">
                    {error}
                </div>
                }
            </div>
            <ul>

                {
                    props.tasks.map(t => {
                            let onClickHandler = () => props.removeTasks(t.id, props.id)
                            let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                let newIsDoneValue = e.currentTarget.checked
                                props.changeStatus(t.id, newIsDoneValue, props.id)
                            }
                            return (
                                <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                    <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
                                    <span>{t.title}</span>
                                    <button onClick={onClickHandler}>x</button>
                                </li>
                            )
                        }
                    )
                }


            </ul>
            <div>
                <button className = {props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
                <button className={props.filter === "active" ? "active-filter": ""}
                    onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === "completed" ? "active-filter":""}
                    onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )

}