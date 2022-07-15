
import ReactHookD from "./ComponentD";

const ReactHookC=(props)=>{
    return(
        <>
     
        <h1>Component C</h1>
        <ReactHookD number={props.number}/>
        </>
    )
}

export default ReactHookC;