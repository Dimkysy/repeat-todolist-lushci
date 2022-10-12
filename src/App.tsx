import React, {useState} from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id:1, title:"Hook", isDone:false},
        {id:2, title: "Props", isDone: true},
        {id:3, title: "Dispach", isDone: true}
    ])

    let  removeTask = (id:number) => {
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

    function changeFilter(value:FilterValuesType) {
        setFileter(value)
    }


    return (
        <div className="App">
            <Todolist title = "React"
                      tasks={tasksForTodolist}
                      removeTask = {removeTask}
                      changeFilter = {changeFilter}
            />

        </div>
    );
}




export default App;
