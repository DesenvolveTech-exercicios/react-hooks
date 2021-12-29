import React, { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import InputNum from "./InputNum";

interface CounterProps{
    count:number
}

function Counter(props:CounterProps) {
    const [count, setCount] = useState(props.count);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCount(parseInt(event.target.value));
    }

    return (
        <>
        <InputNum num={count} change={handleChange}/>
        <p>seu contador é {count}</p>
        <Increment active={handleIncrement}/>
        <Decrement active={handleDecrement}/>
        </>
    );
}

export default Counter;