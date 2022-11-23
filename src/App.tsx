import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

type TodolistType = {
    id:string
    title:string
    filter:FilterValuesType
}


function App() {


    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] =  useState<Array<TodolistType>>([
        {id:todolistId1, title:"What to",filter:"all"},
        {id:todolistId2, title:"Bear no bear", filter:"all"},
    ])


    let [tasksObj, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "React", isDone: true},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "HTML & CSS", isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Book", isDone: false},
        ]
    })


    function removeTask(id:string, todolistId:string) {
        let tasks = tasksObj[todolistId]

        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksObj[todolistId] = filteredTasks
        setTasks({...tasksObj})
    }

    function changeFilter(value:FilterValuesType, todolistId:string) {

        let todolist = todolists.find(tl => tl.id === todolistId)
        if(todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    function addTask(title:string, todolistId:string) {
       let tasks =  tasksObj[todolistId]
       let task = {id:v1(),title:title, isDone:false }

       let newTasks = [task, ...tasks]
        tasksObj[todolistId] = newTasks
        setTasks({...tasksObj})
    }

    function changeStatus(id:string, isDone:boolean, todolistId:string) {
        let tasks = tasksObj[todolistId]

        let task = tasks.find(t => t.id === id )
            if (task) {
                task.isDone = isDone
                setTasks({...tasksObj})
            }

    }

    function removeTodolist(todolistId:string) {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
        setTodolists(filteredTodolist)

        delete tasksObj[todolistId]
        setTasks({...tasksObj})
    }

    return (
        <div className="App">
            {
                todolists.map((tl) => {

                    let tasksForTodolist = tasksObj[tl.id]

                    if (tl.filter === "active"){
                        tasksForTodolist = tasksForTodolist.filter(t=> t.isDone === false)
                    }

                    if(tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t=> t.isDone === true)
                    }


                    return (
                        <Todolist
                            key={tl.id}
                            id = {tl.id}
                            title = {tl.title}
                            filter = {tl.filter}
                            tasks={tasksForTodolist}
                            removeTask = {removeTask}
                            changeFilter ={changeFilter}
                            addTask ={addTask}
                            changeStatus = {changeStatus}
                            removeTodolist ={removeTodolist}
                        />
                    )
                })
            }
        </div>
    );
}





export default App;
