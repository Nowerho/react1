import React from "react";
import Navigator from "../components/Navigator";
import World from "../components/three/csene1";

export const Three = () => {
    return (
        <div>
            <Navigator/>
            {/* <canvas id="scene-container"></canvas> */}
            <World/>
        </div>
    )
}