import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";


export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks ,setTasks] = useState([
        {id:v1(), title:"HTML & CSS",isDone:true},
        {id:v1(), title: "Js", isDone: true},
        {id:v1(), title: "React", isDone: false}
    ])

    function removeTask(id:string) {

        let filteredTask = tasks.filter(t => t.id !== id)
        setTasks(filteredTask)
    }

    function addTask (title:string) {
        let task = {id:v1(), title:title, isDone:false}
        let newTask = [task, ...tasks]
        setTasks(newTask)

    }


    let [filter, setFilter] =useState<FilterValuesType>("all")

    let taskForTodolist = tasks;


    if (filter === "active") {
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }

    if (filter === "completed") {
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }

    function chengeFileter(value:FilterValuesType) {
        setFilter(value)
    }


    return (
        <div className="App">
            <Todolist title="Hello"
                      task = {taskForTodolist}
                      removeTask = {removeTask}
                      chengeFileter = {chengeFileter}
                      addTask = {addTask}
            />
        </div>
    );
}

export default App;
