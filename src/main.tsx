import './index.css'
import {App} from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import ReactDOM from 'react-dom/client';
import React from 'react';
import {Page1} from "./pages/Page1.tsx";
import {Page2} from "./pages/Page2.tsx";
import {UserLogin} from "./pages/User-login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
        {path: "/", element: <UserLogin/>},
        {path: "lienPage1", element: <Page1/>},
        {path: "lienPage2", element: <Page2/>} ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)