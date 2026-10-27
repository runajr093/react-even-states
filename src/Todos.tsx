import { useEffect, useState } from "react"
import TodosCard from "./TodosCard";

export default function Todos(){


    const [todos,setTodos]=useState([]);
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then (res => res.json())
        .then (data => {
            console.log(data);
            setTodos(data);
        })
    },[])




    return (
        <div>
            <h3>Todos:{todos.length}</h3>
            {
                todos.map(info => <TodosCard todos={info}></TodosCard>)
            }
        </div>
    )
}