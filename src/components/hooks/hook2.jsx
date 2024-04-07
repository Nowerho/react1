import React, { useEffect } from "react";

const Hook2 = (props) => {
    console.log("Элемент пересоздан");
    const [name, setName] = React.useState(props.name);
    let x = 'OLD data';
    React.useEffect(() => { //запускается при изменениях из useState через set
        document.title = `Привет ${name}`
        console.log("use");
        console.log('в useEffect: ' + x);
        return () => {      //вызывается при изменении объекта с свойствами до перевызове функции
            // console.log("return");
            console.log('в возврате useEffect: ' + x);

        };
    });
    function changeName(event) {
        setName(event.target.value);
    }
    function buttonClick(event) {
        x = 'NEW data'
        // console.log(x);
    }

    return (
        <div id="hook">
            <h2>useEffect</h2>
            <h3>Имя: {name}</h3>
            <div>
                <p>Имя: <input type="text" value={name} onChange={changeName} /></p>
                <p>Имя: <button text="dskjf" onClick={buttonClick} >Set new data</button></p>
            </div>
        </div>
    );
}
export default Hook2;