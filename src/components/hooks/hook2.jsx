import React, { useEffect } from "react";

const Hook2 = () => {
    const [name, setName] = React.useState();
    React.useEffect(() => {
        document.title = `Привет ${name}`
    });
    function changeName(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Имя: {name}</h3>

            <div>
                <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
            </div>
        </div>
    );
}
export default Hook2;