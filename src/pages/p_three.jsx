import React from "react";
import Navigator from "../components/Navigator";
import World from "../components/three/csene1";

export const P_three = () => {
    return (
        <div>
            <Navigator/>
            {/* <canvas id="scene-container"></canvas> */}
            <World/>
        </div>
    )
}