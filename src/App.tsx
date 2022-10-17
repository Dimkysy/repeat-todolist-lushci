import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let task1 = [
        {id:1, title:"React", isDone:false},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "HTML & CSS", isDone: true},
    ]

    let task2 = [
        {id:1, title:"Flex", isDone:false},
        {id:2, title:"Grid", isDone: false},
        {id:3, title: "Display & Inline", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist  title="Hello" tasks ={task1}/>
            <Todolist  title = "Bear" tasks={task2} />
        </div>
    );
}

export default App;
