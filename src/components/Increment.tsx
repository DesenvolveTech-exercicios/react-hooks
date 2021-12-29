import React from "react";

interface IncrementProps{
    active: any
}

function Increment(props:IncrementProps){
    return(
        <button onClick={props.active}>incrementar</button>
    );
}

export default Increment;