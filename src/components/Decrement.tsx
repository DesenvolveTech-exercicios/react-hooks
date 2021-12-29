import React from "react";

interface DecrementProps{
    active:any
}

function Decrement(props:DecrementProps) {
    return (
        <button onClick={props.active}>Decrementar</button>
    );
}

export default Decrement;