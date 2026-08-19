import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import{ createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App"
import Shows from "./pages/Tvshows"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Shows />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <createBrowserRouter router={router} />
  </React.StrictMode>
)