import React from "react";
import Navigator from "../components/Navigator";
import Hook1 from "../components/hooks/hook1";
import Hook2 from "../components/hooks/hook2";

export const P_hooks = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <Navigator/>
            <Hook1/>
            <Hook2 name="Vasya"/>
        </div>
    )
}