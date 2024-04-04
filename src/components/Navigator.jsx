import React from 'react';
import {Link} from "react-router-dom";

const Navigator = () => {
    return (
        <div>
            <Link to="/home"><button type="button">Главная</button></Link>
            <Link to="/canvas"><button type="button">Канвас</button></Link>
            <Link to="/three"><button type="button">Three.js</button></Link>
            <Link to="/hooks"><button type="button">Hooks</button></Link>
            <Link to="/three"><button type="button">Three.js</button></Link>
        </div>
    );
};

export default Navigator;