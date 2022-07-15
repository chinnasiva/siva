import ReactHookC from "./ComponentC";

const ReactHookB=(props)=>{
    return(
        <>
        <h1>Component B</h1>
        <ReactHookC number={props.number}/>
        </>
    )
}

export default ReactHookB;