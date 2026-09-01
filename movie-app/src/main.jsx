import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Actordetails from "./pages/Actordetails";
import Actors from "./pages/Actors";
import Animation from "./pages/Animations";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "actordetails",
                element: <Actordetails />
            },
            {
                path: "actors",
                element: <Actors />
            },
            {
                path: "animation",
                element: <Animation />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);