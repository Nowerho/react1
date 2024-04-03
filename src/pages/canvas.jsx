import React from "react";
import Navigator from "../components/Navigator";
import Scene1 from "../components/canvas1/scene1";

let x = 20;
export const Canvas = () => {
    return (
        <div>
            <Navigator/>
            <Scene1/>
        </div>
    )
}