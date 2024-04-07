import React from "react";

const Hook3 = (props) => {
    const name = React.useRef(props.name);
    const inpField = React.useRef(null);
    console.log(name.current);
    const send = () => {
        console.log(inpField.current.value);
    }
    return (
        <div id="hook">
            <input type="text" ref={inpField}/>
            <button onClick={send}>в консоль</button>
            <h2>useRef</h2>
            <h3>{name.current}</h3>
        </div>
    )
}
export default Hook3;