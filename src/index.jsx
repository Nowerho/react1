import "./style/reset.css"
import "./style/main.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate,} from "react-router-dom";


import { Home } from './pages/home';
import { Canvas } from './pages/canvas';
import { Three } from "./pages/three";

const routing = createBrowserRouter([
    {path: "/", element: <Navigate to="/home"/>},
    {path: "/home", element: <Home/>},
    {path: "/canvas", element: <Canvas/>},
    {path: "/three", element: <Three/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode> // делает дублирующий рендеринг
        <RouterProvider router={routing}/>
    // </React.StrictMode>
);
