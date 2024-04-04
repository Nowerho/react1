//компонент реализует хук useState тобиш состояния. 

import React from "react";

const Hook1 = () => { // стрелочная функуция с функцией рендер
    const [user, setUser] = React.useState({ name: "Tom", age: 36 }); //хук принимает объект и следит за изменением состояния

    function handleNameChange(event) {                    // функция вызываемая по нажатии кнопки или отправки формы
        setUser({ ...user, name: event.target.value });     // устанавливаем имя оно попадает в хук и заставляет изменить форму
    }

    function handleAgeChange(event) {                   // то же самое что и с именем, только в возрастом
        setUser({ ...user, age: event.target.value });      // устанавливаем через setUser
    }
    return (                                               // результат функции
        <div id="hook">
            <h3>Имя: {user.name}</h3>
            <h3>Возраст: {user.age}</h3>

            <div>
                <p>Имя: <input type="text" value={user.name} onChange={handleNameChange} /></p>
                <p>Возраст: <input type="range" min="0" max="110" value={user.age} onChange={handleAgeChange} /></p>
            </div>
        </div>
    )
}

export default Hook1;