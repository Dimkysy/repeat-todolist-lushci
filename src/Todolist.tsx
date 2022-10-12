<<<<<<< HEAD
import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}


type PropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (id: string) => void
    chengeFileter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (id:string, isDone:boolean) => void
    filter:string
}

export function Todolist(props: PropsType) {


    let [title, setTitle] = useState("")
    let [error, setError] = useState <string | null>(null)



    let addTask = () => {
        if(title.trim() !== "") {
            props.addTask(title)
            setTitle("")
        } else {
            setError("Title is require")
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    // @ts-ignore
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }



    const onAllHandler = () =>  props.chengeFileter("all")
    const onActiveHandler = () => props.chengeFileter("active")
    const onCompletedHandler = () => props.chengeFileter("completed")


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}

            </div>
            <ul>

                {
                    props.task.map(t => {
                        const onClickHandler = () => props.removeTask(t.id)
                        const onChangeChecked = (e:ChangeEvent<HTMLInputElement>) => {
                            let newIsDone = e.currentTarget.checked
                            props.changeStatus(t.id, newIsDone)
                        }

                        return (
                            <li key={t.id} className={ !t.isDone ? "is-done": ""} >
                                <input type="checkbox" checked={t.isDone}  onChange={onChangeChecked }/>
                                <span>{t.title}</span>
                                <button className="buttonDell" type="button" onClick={onClickHandler}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button  className = {props.filter === "all" ? "actve-filter" : "" }
                    onClick={onAllHandler}>All</button>
                <button  className = {props.filter === "active" ? "actve-filter" : "" }
                    onClick={onActiveHandler}>Active</button>
                <button className = {props.filter === "completed" ? "actve-filter" : "" }
                    onClick={onCompletedHandler}>Completed</button>
            </div>
        </div>
    )
}


=======
import React from "react";
import { FilterValuesType } from "./App";

type TaskType = {
    id:number
    title:string
    isDone:boolean
}

type PropsType = {
    title:string
    tasks:Array<TaskType>
    removeTask:(id:number) => void
    changeFilter:(value:FilterValuesType) => void
}

export function Todolist(props:PropsType) {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t=> <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button className="buttonDell" type="button"  onClick={() => {props.removeTask(t.id)}} >x</button>
                    </li>
                    )
                }

            </ul>
            <div>
                <button onClick={ () => props.changeFilter("all")} >All</button>
                <button  onClick={() => props.changeFilter("active") } >Active</button>
                <button onClick={() => props.changeFilter("completed")} >Completed</button>
            </div>
        </div>
    )
}
>>>>>>> 17061ff (repeat 1 lesson 3)
