import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist } from './Todolist';

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:v1(), title:"Hook", isDone:false},
        {id:v1(), title: "Props", isDone: true},
        {id:v1(), title: "Dispach", isDone: true}
    ])

    let  removeTask = (id:string) => {
        let fileterdTask = tasks.filter(t => t.id != id );
        setTasks(fileterdTask)
    }

    let [filter, setFileter] = useState<FilterValuesType>("all");
    let tasksForTodolist = tasks;

    if (filter === "active" ) {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    let  changeFilter = (value:FilterValuesType) => {
        setFileter(value)
    }

    let addTask = (title:string) =>  {
        let task = {id:v1(), title:title, isDone:false}
        let newTasks = [...tasks, task]
        setTasks(newTasks)
    }

    function changeTaskStatus(id:string, isDone:boolean) {
        let task = tasks.find(t => t.id === id)

        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
    }


    return (
        <div className="App">
            <Todolist title = "React"
                      tasks={tasksForTodolist}
                      removeTask = {removeTask}
                      changeFilter = {changeFilter}
                      addTask = {addTask}
                      changeTaskStatus = {changeTaskStatus}
                      filter = {filter}
            />

        </div>
    );
}




export default App;

