import { useState } from "react";
import ReactHookB from "./ComponentB";

const ReactHookA=()=>{
    const [number,setNumber]=useState(30)
    return(
        <>
        <h1 style={{color:"burlywood"}}>Welcome To React Hooks</h1>
        <h1>Component A-{number}</h1>
        <ReactHookB number={number}/>
        <button onClick={()=>{setNumber(20)}}>clicked</button>
        </>
    )
}

export default ReactHookA;