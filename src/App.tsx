import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    const tasks1 = [
        {id:1, title:"React", isDone:true},
        {id:2, title: "Redux", isDone: false},
        {id:3, title: "HTML & CSS", isDone: true},
    ]

    const tasks2 = [
        {id:1, title:"Milk", isDone:true},
        {id:2, title: "Book", isDone: false},
        {id:3, title: "Processor", isDone: true},
    ]


    return (
        <div className="App">
           <Todolist title = "Hello"  tasks={tasks1} />
           <Todolist title="Hi" tasks={tasks2}/>
        </div>
    );
}

export default App;
