import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import GetStoreData from "./Pages/GetStoreData.jsx";
import HeaderCompo from "./CommonCompo/HeaderCompo.jsx";
import LoginComponent from "./Pages/LoginComponent.jsx";
// console.log("main Router.js");
const AdminRouter = React.lazy(() => { return import('./Pages/Admin/AdminRoute.jsx') })

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        // element:<Navigate to="/home" replace />
        element:<HeaderCompo/>,

    },{
        path: "/home",
        element: <HomePage />,
    },{
        path: "/access-store-data",
        element: <GetStoreData />,
    },{
        path: "/login",
        element: <LoginComponent />,
    },{
        path: "admin/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><AdminRouter /></Suspense>,
    }
]);
export default MainRoutes;