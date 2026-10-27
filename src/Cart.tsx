import { useState } from "react"

export default function Cart (){
    const[item,setItem]=useState(0);
const handleAddItem = () => {
    return setItem (item + 1)
}
    return (
        <div>
            <h1>Bazar Ghor</h1>
            <h4>Sold item:{item}</h4>
            <button onClick={handleAddItem}>Add </button>
        </div>
    )
}