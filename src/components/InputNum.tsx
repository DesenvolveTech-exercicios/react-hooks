import React from "react";

interface InputNumProps{
    change: React.ChangeEventHandler<HTMLInputElement>,
    num: number
}

function InputNum(props:InputNumProps){
    return(
        <>
        <label htmlFor="">Numero inicial:</label>
        <input value={props.num} onChange={props.change}/>
        </>
    );
}

export default InputNum;