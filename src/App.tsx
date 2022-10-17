import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:1, title:"React", isDone:false},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "HTML & CSS", isDone:true}
    ])


    let removeTasks = (id:number) =>  {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
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


    return (
        <div className="App">
            <Todolist
                title="Hello"
                tasks ={changeFilter}
                removeTasks = {removeTasks}
                changeFileter = {changeFileter}
            />
        </div>
    );
}

export default App;
