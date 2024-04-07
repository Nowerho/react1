import "./style/reset.css"
import "./style/main.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate,} from "react-router-dom";


import P_home from './pages/p_home';
import P_canvas from './pages/p_canvas';
import P_three from "./pages/p_three";
import P_hooks from "./pages/p_hooks";
import P_lazy from "./pages/p_lazy";

const routing = createBrowserRouter([
    {path: "/", element: <Navigate to="/home"/>},
    {path: "/home", element: <P_home/>},
    {path: "/canvas", element: <P_canvas/>},
    {path: "/three", element: <P_three/>},
    {path: "/hooks", element: <P_hooks/>},
    {path: "/lazy", element: <P_lazy/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode> // делает дублирующий рендеринг
        <RouterProvider router={routing}/>
    // </React.StrictMode>
);
