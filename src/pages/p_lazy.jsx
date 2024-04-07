import React from "react";
import Navigator from "../components/Navigator";
const Laz = React.lazy(() => import("../components/lazy/lazy1"))

const P_lazy = () => {
    return(
        <div>
            <Navigator/>
            <React.Suspense fallback={console.log('Загрузка')}>
                <Laz />
            </React.Suspense>
        </div>
    )
}
export default P_lazy;