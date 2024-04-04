import React from "react";

const Hook1 = () => {
    const [count, setCount] = React.useState(0);
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={() => setCount(count + 1)}>
            Увеличить
            </button>
        </div>
    )
}

export default Hook1;