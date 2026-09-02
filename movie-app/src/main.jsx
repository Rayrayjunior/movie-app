import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Actordetails from "./pages/Actordetails";
import Actors from "./pages/Actors";
import Animation from "./pages/Animations";
import Tvshows from "./pages/Tvshows";

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
                path: "animations",
                element: <Animation />
            },
            {
                path: "tvshows",
                element: <Tvshows />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);