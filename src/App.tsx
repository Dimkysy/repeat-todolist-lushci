import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist';

export type  FilterValueType = "all" | "active" | "completed"


export type TaskType = {
    id:number
    title:string
    isDone:boolean
}

function App() {

    let [tasks, setTasks] = useState([
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS NODE", isDone:false},
        {id:3, title:"React & Redux", isDone:false},
    ])

    let [filter, setFilter] = useState<FilterValueType>("all")

    let tasksForTodolist = tasks

    function removeTasks(id:number) {
        let newTaks = tasks.filter(t => t.id != id)
        setTasks(newTaks)
    }

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value:FilterValueType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title ="Hello World" tasks={tasksForTodolist}
                      removeTasks = {removeTasks}
                      changeFilter = {changeFilter}
            />
        </div>
    );
}


export default App;
