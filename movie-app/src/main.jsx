import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import{ createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App"
import Home from "./pages/Home"
import Actordetails from "./pages/Actordetails"
import Actors from "./pages/Actors"
import Animation from "./pages/Animations"

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
        index: "actordetails",
        element: <Actordetails />
      },
      {
        index: "actors",
        element: <Actors />
      },
      {
        index: "animation",
        element: <Animation />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <createBrowserRouter router={router} />
  </React.StrictMode>
)