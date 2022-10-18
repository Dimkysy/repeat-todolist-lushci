import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:v1(), title:"React", isDone:false},
        {id:v1(), title: "JS", isDone: true},
        {id:v1(), title: "HTML & CSS", isDone:true}
    ])


    let removeTasks = (id:string) =>  {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
    }

    let addTask = (title:string) => {
        let newTaks = {id:v1(), title:title, isDone:false}
        setTasks([newTaks, ...tasks])
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")

    let changeFilter = tasks

    if (filter === "active")  {
        changeFilter = tasks.filter(t => t.isDone === false)
    }

    if (filter === "completed") {
        changeFilter = tasks.filter(t => t.isDone === true)
    }

    let changeFileter = (value:FilterValuesType) => {
        setFilter(value)
    }


    let changeStatus = (id:string, isDone:boolean) => {
        let task =  tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }


    }

    return (
        <div className="App">
            <Todolist
                title="Hello"
                tasks ={changeFilter}
                removeTasks = {removeTasks}
                changeFileter = {changeFileter}
                addTask = {addTask}
                changeStatus = {changeStatus}
                filter = {filter}
            />
        </div>
    );
}

export default App;
