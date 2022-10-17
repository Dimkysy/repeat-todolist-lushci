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
    removeTasks: (id: string) => void
    changeFileter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {


    let [title, setTitle] = useState("")

    let addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    let onChandgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    //@ts-ignore
    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask()
        }
    }

    let onAllClickHandler = () => props.changeFileter("all")
    let onActiveClickHandler = () => props.changeFileter("active")
    let onCompletedClickHandler = () => props.changeFileter("completed")


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChandgeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>

                {
                    props.tasks.map(t => {
                            let onClickHandler = () => props.removeTasks(t.id)

                            return (
                                <li key={t.id}>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={onClickHandler}>x</button>
                                </li>
                            )
                        }
                    )
                }


            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )

}