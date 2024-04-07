import React from "react";
import Navigator from "../components/Navigator";
import Hook1 from "../components/hooks/hook1";
import Hook2 from "../components/hooks/hook2";
import Hook3 from "../components/hooks/hook3";

const P_hooks = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <Navigator/>
            <Hook1/>
            <Hook2 name="Oleg"/>
            <Hook3 name="Жопашник"/>
        </div>
    )
}
export default P_hooks;