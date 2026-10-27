import { useState } from "react"

export default function Counter (){
    const [runs,setRuns] = useState(0);
    const handleSetRuns = () =>{
        return setRuns(runs+1)
    }
    const handleAddFour = ()=>{
        return setRuns (runs + 4)
    }
    const handleAddSix = ()=>{
        return setRuns (runs + 6)
    }
    return (
        <div>
            <h2>Cricket Match <br />Bangladesh Vs India</h2>
            <p>----------------------</p>
            <h3>Score:{runs}</h3>
            <button onClick={handleSetRuns}>Add 1</button>
            <button onClick={handleAddFour}>Add 4</button>
            <button onClick={handleAddSix}>Add 6</button>
        </div>
    )
}